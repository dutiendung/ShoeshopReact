import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import PageSearch from '~/pages/Search';
import style from './Search.module.scss';
import searchService from '~/services/searchService';
import { useDebounce } from '~/hooks';
import config from '~/config';

const cx = classNames.bind(style);
function Search({ setHiddenFeature }) {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    const debouncedValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            const result = await searchService(debouncedValue);
            setSearchResult(result);
        };
        fetchApi();
    }, [debouncedValue]);
    return (
        <div
            className={cx('wrapper')}
            onMouseOver={() => {
                setHiddenFeature('hidden');
            }}
            onMouseOut={() => {
                setHiddenFeature(undefined);
            }}
        >
            <input
                value={searchValue}
                placeholder="Search products"
                onChange={handleChange}
            />
            <Link className={cx('link')} to={config.routes.search}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
        </div>
    );
}

export default Search;

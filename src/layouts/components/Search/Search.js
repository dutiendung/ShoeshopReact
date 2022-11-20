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
    const [stateSearch, setStateSearch] = useState();
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    useEffect(() => {
        const fetchApi = async () => {
            const result = await searchService(searchValue);
            setSearchResult(result);
        };
        fetchApi();
    }, [stateSearch]);
    const handleSearch = () => {
        setStateSearch((...prev) => {
            return prev + 1;
        });
    };
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
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    onClick={handleSearch}
                />
            </Link>
        </div>
    );
}

export default Search;

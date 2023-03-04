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
import ProductCard from '~/components/ProductCard';
const cx = classNames.bind(style);
function Search({ setHiddenFeature }) {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const debouncedValue = useDebounce(searchValue, 500);
    // const [stateSearch, setStateSearch] = useState();

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            const result = await searchService(searchValue);
            setSearchResult(result);
            // console.log(searchResult);
        };
        fetchApi();
    }, [debouncedValue]);

    // const handleSearch = () => {
    //     setStateSearch((...prev) => {
    //         return prev + 1;
    //     });
    // };
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('buttonSearch')}>
                <div>
                    <input
                        value={searchValue}
                        placeholder="Search products"
                        onChange={handleChange}
                    />

                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        // onClick={handleSearch}
                    />
                </div>
            </div>
            <div className={cx('searchResult')}>
                {searchResult.length == 0 ? (
                    <div>Không có kết quả nào hãy thử nhập từ khóa khác</div>
                ) : (
                    <>
                        <div className={cx('totalResult')}>
                            Tìm thấy {searchResult.length} kết quả phù hợp
                        </div>
                        <div className={cx('resultItem')}>
                            {searchResult.map((result) => {
                                return (
                                    <ProductCard
                                        key={result.id}
                                        data={result}
                                    />
                                );
                            })}
                        </div>
                        <a href="#">Lên đầu trang</a>
                    </>
                )}
            </div>
        </div>
    );
}

export default Search;

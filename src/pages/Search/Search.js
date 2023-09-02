import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'

import ProductCard from '~/components/ProductCard'
import { useDebounce } from '~/hooks'
import searchService from '~/services/searchService'
import style from './Search.module.scss'
const cx = classNames.bind(style)
function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const debouncedValue = useDebounce(searchValue, 500)
    // const [stateSearch, setStateSearch] = useState();

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([])
            return
        }
        const fetchApi = async () => {
            const result = await searchService(searchValue)
            setSearchResult(result)
            // console.log(searchResult);
        }
        fetchApi()
    }, [debouncedValue])

    // const handleSearch = () => {
    //     setStateSearch((...prev) => {
    //         return prev + 1;
    //     });
    // };
    const handleChange = (e) => {
        const searchValue = e.target.value
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
        }
    }
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
                {searchResult.length === 0 ? (
                    <div className={cx('totalResult')}>
                        Không có kết quả nào hãy thử nhập từ khóa khác
                    </div>
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
                                )
                            })}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Search

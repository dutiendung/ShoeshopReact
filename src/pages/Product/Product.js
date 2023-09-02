import Pagination from '@mui/material/Pagination'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import productService from '~/services/productsService'
import ProductFilter from './Components/ProductFilter'
import './Pagination.scss'
import style from './Product.module.scss'

import ProductCard from '~/components/ProductCard'
import ProductLoading from './ProductLoading'
const cx = classNames.bind(style)
function Product() {
    useEffect(() => {
        document.title = 'DStore | Sảm phẩm'
        window.scrollTo(0, 0)
    }, [])
    const [filters, setFilters] = useState({
        filterCategoryIds: [],
        color: [],
        sizes: [],
    })
    const [page, setPage] = useState(1)
    const [order, setOrder] = useState('asc')
    const [filterProductList, setFilterProductList] = useState([])
    const [totalPage, setTotalPage] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        productService
            .getFilter({
                _page: page,
                _limit: 9,
                _sort: 'originalPrice',
                _order: order,
                category: filters.filterCategoryIds,
                color: filters.colors,
                size: filters.sizes,
            })
            .then((data) => {
                setFilterProductList(data)
                setLoading(false)
            })
        //get total pages
        productService
            .getFilter({
                category: filters.filterCategoryIds,
                color: filters.colors,
                size: filters.sizes,
            })
            .then((data) => {
                setTotalPage(Math.ceil(data.length / 9))
            })
    }, [page, order, filters])

    const handleFilterChange = (newFilter) => {
        setFilters((prev) => {
            return { ...prev, ...newFilter }
        })
    }

    const handleChangePage = (e, page) => {
        setPage(page)
    }
    const handlePriceAsc = () => {
        setOrder('asc')
    }
    const handlePriceDesc = () => {
        setOrder('desc')
    }
    return loading ? (
        <ProductLoading />
    ) : (
        <div className={cx('wrapper')}>
            <div className={cx('about')}>
                <div className={cx('title')}>For You</div>
                Tất cả những sản phẩm Mới nhất nằm trong BST được mở bán Hàng
                Tuần sẽ được cập nhật liên tục tại đây. Chắc chắn bạn sẽ tìm
                thấy những sản phẩm Đẹp Nhất - Vừa Vặn Nhất - Phù Hợp nhất với
                phong cách của mình.
            </div>
            <div className={cx('content')}>
                <div className={cx('productFilter')}>
                    <ProductFilter onChange={handleFilterChange} />
                </div>
                <div className={cx('products')}>
                    <div className={cx('sort')}>
                        <button
                            className={order === 'asc' ? cx('active') : ''}
                            onClick={handlePriceAsc}
                        >
                            Giá tăng dần
                        </button>
                        <button
                            className={order === 'desc' ? cx('active') : ''}
                            onClick={handlePriceDesc}
                        >
                            Giá giảm dần
                        </button>
                    </div>
                    <div className={cx('productList')}>
                        {filterProductList.map((data) => {
                            return <ProductCard data={data} key={data.id} />
                        })}
                    </div>
                    <div className={cx('pagination')}>
                        <Pagination
                            count={totalPage}
                            page={page}
                            onChange={handleChangePage}
                            size="large"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product

import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import style from './Product.module.scss';
import ProductFilter from './Components/ProductFilter';
import productService from '~/services/productsService';
import './Pagination.scss';
import ProductCard from '~/components/ProductCard';
const cx = classNames.bind(style);
function Product() {
    document.title = 'DStore | Sảm phẩm';
    const [filters, setFilters] = useState({
        filterCategoryIds: [],
        color: [],
        sizes: [],
    });
    const [page, setPage] = useState(1);

    const [order, setOrder] = useState('asc');
    const [filterProductList, setFilterProductList] = useState([]);
    const [totalPage, setTotalPage] = useState(6);

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
                setFilterProductList(data);
            });
    }, [page, order, filters]);

    const handleFilterChange = (newFilter) => {
        setFilters((prev) => {
            return { ...prev, ...newFilter };
        });
    };

    const handleChangePage = (e, page) => {
        setPage(page);
    };
    return (
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
                    <ProductFilter
                        onChange={handleFilterChange}
                        filters={filters}
                    />
                </div>
                <div>
                    <div className={cx('productList')}>
                        {filterProductList.map((data) => {
                            return <ProductCard data={data} key={data.id} />;
                        })}
                    </div>
                    <div className={cx('pagination')}>
                        <Pagination
                            count={6}
                            page={page}
                            onChange={handleChangePage}
                            size="large"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;

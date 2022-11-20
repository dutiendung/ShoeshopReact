import classNames from 'classnames/bind';
import CategoryFilter from '../CategoryFilter';
import ColorFilter from '../ColorFilter';
import SizeFilter from '../SizeFilter';
import style from './ProductFilter.module.scss';
const cx = classNames.bind(style);
function ProductFilter({ filter, onChange }) {
    const handleCategoryChange = (filterCategoryIds) => {
        const newFilter = {
            ...filter,
            filterCategoryIds,
        };
        onChange(newFilter);
    };
    const handleSizeChange = (sizes) => {
        const newFilter = {
            ...filter,
            sizes,
        };
        onChange(newFilter);
    };
    const handleColorChange = (colors) => {
        const newFilter = {
            ...filter,
            colors,
        };
        onChange(newFilter);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('filterItem')}>
                <div className={cx('title')}>Danh mục</div>
                <CategoryFilter onChange={handleCategoryChange} />
            </div>
            <div className={cx('filterItem')}>
                <div className={cx('title')}>Kích thước</div>
                <SizeFilter onChange={handleSizeChange} />
            </div>
            <div className={cx('filterItem')}>
                <div className={cx('title')}>Màu sắc</div>
                <ColorFilter onChange={handleColorChange} />
            </div>
        </div>
    );
}

export default ProductFilter;

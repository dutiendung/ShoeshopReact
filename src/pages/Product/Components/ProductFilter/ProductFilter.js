import classNames from 'classnames/bind'
import CategoryFilter from '../CategoryFilter'
import ColorFilter from '../ColorFilter'
import SizeFilter from '../SizeFilter'
import style from './ProductFilter.module.scss'
const cx = classNames.bind(style)
function ProductFilter({ onChange }) {
    const handleCategoryChange = (filterCategoryIds) => {
        onChange({ filterCategoryIds })
    }
    const handleSizeChange = (sizes) => {
        onChange({ sizes })
    }
    const handleColorChange = (colors) => {
        onChange({ colors })
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('filterItem')}>
                <div className={cx('title')}>Danh mục</div>
                <CategoryFilter onChangeCategory={handleCategoryChange} />
            </div>
            <div className={cx('filterItem')}>
                <div className={cx('title')}>Kích thước</div>
                <SizeFilter onChangeSize={handleSizeChange} />
            </div>
            <div className={cx('filterItem')}>
                <div className={cx('title')}>Màu sắc</div>
                <ColorFilter onChangeColor={handleColorChange} />
            </div>
        </div>
    )
}

export default ProductFilter

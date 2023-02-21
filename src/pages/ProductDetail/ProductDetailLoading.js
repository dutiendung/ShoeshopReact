import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import classNames from 'classnames/bind';
import style from './ProductDetailLoading.module.scss';
const cx = classNames.bind(style);
function ProductDetailLoading() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('productImg')}>
                <Skeleton height={500} width={600} />
            </div>
            <div className={cx('detail')}>
                <div className={cx('productName')}>
                    <Skeleton height={35} width={500} />
                </div>
                <div className={cx('des')}>
                    <Skeleton count={4} height={20} width={700} />
                </div>
                <div className={cx('size')}>
                    <Skeleton height={35} width={100} />
                </div>
                <div className={cx('price')}>
                    <Skeleton height={40} width={150} />
                </div>
                <Skeleton height={45} width={120} />
                <Skeleton height={45} width={270} />
            </div>
        </div>
    );
}
export default ProductDetailLoading;

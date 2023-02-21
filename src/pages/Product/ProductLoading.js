import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import classNames from 'classnames/bind';
import style from './ProductLoading.module.scss';
const cx = classNames.bind(style);
function ProductLoading() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('first')}></div>
            <div className={cx('second')}>
                <div className={cx('item')}>
                    <Skeleton height={370} width={350} />
                </div>
                <div className={cx('item')}>
                    <Skeleton height={370} width={350} />
                </div>
                <div className={cx('item')}>
                    <Skeleton height={370} width={350} />
                </div>
                <div className={cx('item')}>
                    <Skeleton height={370} width={350} />
                </div>
                <div className={cx('item')}>
                    <Skeleton height={370} width={350} />
                </div>
                <div className={cx('item')}>
                    <Skeleton height={370} width={350} />
                </div>
                <div className={cx('item')}>
                    <Skeleton height={370} width={350} />
                </div>
                <div className={cx('item')}>
                    <Skeleton height={370} width={350} />
                </div>
                <div className={cx('item')}>
                    <Skeleton height={370} width={350} />
                </div>
            </div>
        </div>
    );
}
export default ProductLoading;

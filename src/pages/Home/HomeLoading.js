import classNames from 'classnames/bind';
import style from './HomeLoading.module.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const cx = classNames.bind(style);

function HomeLoading() {
    return (
        <div className={cx('wrapper')}>
            <div>
                <Skeleton width={352} height={400} />
            </div>
            <div>
                <Skeleton width={352} height={400} />
            </div>
            <div>
                <Skeleton width={352} height={400} />
            </div>
            <div>
                <Skeleton width={352} height={400} />
            </div>
        </div>
    );
}

export default HomeLoading;

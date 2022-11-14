import { faCartPlus, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import style from './ProductCard.module.scss';
const cx = classNames.bind(style);
function ProductCard({ data = {} }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('imgProduct')}>
                <img src={data.image} />
            </div>
            <div className={cx('action')}>
                <div className={cx('addToCart')}>
                    Thêm vào giỏ hàng <FontAwesomeIcon icon={faCartPlus} />
                </div>
                <div className={cx('detail')} title="Xem chi tiết sảm phẩm">
                    <FontAwesomeIcon icon={faEye} />
                </div>
            </div>
            <div className={cx('productName')}>{data.title}</div>
            <div className={cx('price')}>
                {data.originalPrice.toLocaleString()}
            </div>
            <span className={cx('sale')}>{data.promotionPercent} %</span>
        </div>
    );
}

export default ProductCard;

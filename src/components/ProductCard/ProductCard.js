import { faCartPlus, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

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
                    Thêm vào giỏ hàng
                    <FontAwesomeIcon className={cx('icon')} icon={faCartPlus} />
                </div>
                <Link to={`/products/${data.id}`}>
                    <div className={cx('detail')} title="Xem chi tiết sảm phẩm">
                        <FontAwesomeIcon icon={faEye} />
                    </div>
                </Link>
            </div>
            <div className={cx('productName')}>{data.title}</div>
            <div className={cx('price')}>
                <div className={cx('originalPrice')}>
                    {new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                    }).format(data.originalPrice)}
                </div>
                <span className={cx('salePrice')}>
                    {data.promotionPercent} %
                </span>
            </div>
        </div>
    );
}

export default ProductCard;

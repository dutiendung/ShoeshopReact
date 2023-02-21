import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import productService from '~/services/productsService';
import { useParams } from 'react-router-dom';
import style from './ProductDetail.module.scss';

import ProductDetailLoading from './ProductDetailLoading';
const cx = classNames.bind(style);
function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        productService
            .get(id)
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return loading ? (
        <ProductDetailLoading />
    ) : (
        <div className={cx('wrapper')}>
            <div className={cx('productImg')}>
                <img src={product.image} />
            </div>
            <div className={cx('detail')}>
                <div className={cx('productName')}>{product.title}</div>
                <div className={cx('des')}>{product.description}</div>
                <div className={cx('size')}>
                    Size: <span>{product.size}</span>
                </div>
                <div className={cx('price')}>
                    {new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                    }).format(product.salePrice)}

                    <span className={cx('originalPrice')}>
                        {new Intl.NumberFormat('vi-VN', {
                            style: 'currency',
                            currency: 'VND',
                        }).format(product.originalPrice)}
                    </span>
                </div>
                <div className={cx('quantity')}>
                    <button className={cx('increase')}>+</button>
                    <span className={cx('count')}>1</span>
                    <button className={cx('decrease')}>-</button>
                </div>
                <div className={cx('action')}>
                    <div className={cx('addCart')}>Thêm vào giỏ hàng</div>
                    <div className={cx('buy')}>Mua ngay</div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;

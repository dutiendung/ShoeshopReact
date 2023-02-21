import classNames from 'classnames/bind';
import style from './Cart.module.scss';
import ProductDetailLoading from '../ProductDetail/ProductDetailLoading';
const cx = classNames.bind(style);
function Cart() {
    return (
        <div className={cx('wrapper')}>
            <ProductDetailLoading />
            <h2>Cart</h2>
        </div>
    );
}

export default Cart;

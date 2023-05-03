import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import VideoHome from '~/layouts/components/VideoHome';
import ProductCard from '~/components/ProductCard';
import productService from '~/services/productsService';
import HomeLoading from './HomeLoading';
import style from './Home.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
const cx = classNames.bind(style);

function Home() {
    document.title = 'DStore | Mua Online Giày Thời Trang';
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        productService
            .getAll()
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);

    //Custom Arrows
    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: 'block',
                    background: '#ccc',
                    borderRadius: ' 999px',
                }}
                onClick={onClick}
            />
        );
    }

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: 'block',
                    background: '#ccc',
                    borderRadius: ' 999px',
                }}
                onClick={onClick}
            />
        );
    }

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: false,
        autoplaySpeed: 2000,
    };

    return (
        <div className={cx('wrapper')}>
            <VideoHome />
            <div className={cx('shockDiscount')}>
                <div className={cx('title')}>
                    <div className={cx('label')}>Giảm giá sốc</div>
                    <Link className={cx('seeAll')} to={config.routes.products}>
                        ...Xem tất cả
                    </Link>
                </div>
                <div className={cx('products')}>
                    {loading ? (
                        <HomeLoading />
                    ) : (
                        <Slider {...sliderSettings}>
                            {products?.map((product) => {
                                if (product.promotionPercent >= 25) {
                                    return (
                                        <ProductCard
                                            key={product.id}
                                            data={product}
                                        />
                                    );
                                }
                            })}
                        </Slider>
                    )}
                </div>
            </div>
            <div className={cx('otherProducts')}>
                <div className={cx('title')}>
                    <div className={cx('label')}>Sảm phẩm khác</div>
                    <Link className={cx('seeAll')} to={config.routes.products}>
                        ...Xem tất cả
                    </Link>
                </div>
                <div className={cx('products')}>
                    {loading ? (
                        <HomeLoading />
                    ) : (
                        <Slider {...sliderSettings}>
                            {products?.map((product) => {
                                if (product.promotionPercent < 25) {
                                    return (
                                        <ProductCard
                                            key={product.id}
                                            data={product}
                                        />
                                    );
                                }
                            })}
                        </Slider>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;

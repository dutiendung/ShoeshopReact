import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import { Link } from 'react-router-dom'
import ProductCard from '~/components/ProductCard'
import config from '~/config'
import VideoHome from '~/layouts/components/VideoHome'
import productService from '~/services/productsService'
import style from './Home.module.scss'
import HomeLoading from './HomeLoading'
import Header from '~/layouts/components/Header/Header'
import Footer from '~/layouts/components/Footer/Footer'
const cx = classNames.bind(style)

function Home() {
    document.title = 'DStore | Mua Online Giày Thời Trang'
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        productService
            .getAll()
            .then((data) => {
                setProducts(data)
                setLoading(false)
            })
            .catch((error) => console.log(error))
    }, [])

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 2000,
    }

    return (
        <>
            <Header />
            <VideoHome />
            <div className={cx('wrapper')}>
                <div className={cx('shockDiscount')}>
                    <div className={cx('title')}>
                        <div className={cx('label')}>Giảm giá sốc</div>
                        <Link
                            className={cx('seeAll')}
                            to={config.routes.products}
                        >
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
                                        )
                                    }
                                })}
                            </Slider>
                        )}
                    </div>
                </div>
                <div className={cx('otherProducts')}>
                    <div className={cx('title')}>
                        <div className={cx('label')}>Sảm phẩm khác</div>
                        <Link
                            className={cx('seeAll')}
                            to={config.routes.products}
                        >
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
                                        )
                                    }
                                })}
                            </Slider>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home

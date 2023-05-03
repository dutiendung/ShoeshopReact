import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import {
    faUser,
    faCartShopping,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import style from './Header.module.scss';
import Search from '../../../pages/Search';
const cx = classNames.bind(style);
function Header() {
    const [home, setHome] = useState(true);
    const [product, setProduct] = useState(false);
    const [contact, setContact] = useState(false);
    const [hiddenFeature, setHiddenFeature] = useState(undefined);
    const handleActiveHome = () => {
        setProduct(false);
        setContact(false);
        setHome(true);
    };
    const handleActiveProduct = () => {
        setHome(false);
        setContact(false);
        setProduct(true);
    };
    const handleActiveContact = () => {
        setProduct(false);
        setHome(false);
        setContact(true);
    };
    const handleDisableActive = () => {
        setProduct(false);
        setHome(false);
        setContact(false);
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <span className={cx('logo')} onClick={handleActiveHome}>
                    <Link className={cx('link')} to={config.routes.home}>
                        DSTORE
                    </Link>
                </span>
                <ul className={cx('nav')}>
                    <li
                        className={home ? cx('active') : undefined}
                        onClick={handleActiveHome}
                    >
                        <NavLink className={cx('link')} to={config.routes.home}>
                            Trang chủ
                        </NavLink>
                    </li>
                    <li
                        className={product ? cx('active') : undefined}
                        onClick={handleActiveProduct}
                    >
                        <NavLink
                            className={cx('link')}
                            to={config.routes.products}
                        >
                            Sảm phẩm
                        </NavLink>
                    </li>
                    <li
                        className={contact ? cx('active') : undefined}
                        onClick={handleActiveContact}
                    >
                        <NavLink
                            className={cx('link')}
                            to={config.routes.contact}
                        >
                            Liên hệ
                        </NavLink>
                    </li>
                </ul>
                <div className={cx('feature')} onClick={handleDisableActive}>
                    <Link
                        className={cx('link', hiddenFeature)}
                        to={config.routes.login}
                    >
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                    <Link
                        className={cx('link', hiddenFeature, 'cart')}
                        to={config.routes.cart}
                    >
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span className={cx('total-item')}>0</span>
                    </Link>

                    <Link
                        className={cx('link', 'search')}
                        to={config.routes.search}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;

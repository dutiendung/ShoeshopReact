import {
    faCartShopping,
    faMagnifyingGlass,
    faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import { Link, NavLink } from 'react-router-dom'
import config from '~/config'
import style from './Header.module.scss'
const cx = classNames.bind(style)
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <span className={cx('logo')}>
                    <Link className={cx('link')} to={config.routes.home}>
                        DSTORE
                    </Link>
                </span>
                <ul className={cx('nav')}>
                    <li>
                        <NavLink className={cx('link')} to={config.routes.home}>
                            Trang chủ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={cx('link')}
                            to={config.routes.products}
                        >
                            Sảm phẩm
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={cx('link')}
                            to={config.routes.contact}
                        >
                            Liên hệ
                        </NavLink>
                    </li>
                </ul>

                <div className={cx('feature')}>
                    <Link className={cx('link')} to={config.routes.login}>
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                    <Link
                        className={cx('link', 'cart')}
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
    )
}

export default Header

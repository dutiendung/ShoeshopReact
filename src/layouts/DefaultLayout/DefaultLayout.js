import classNames from 'classnames/bind'
import style from './DefaultLayout.module.scss'

import Footer from '~/layouts/components/Footer'
import Header from '~/layouts/components/Header'
const cx = classNames.bind(style)
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    )
}

export default DefaultLayout

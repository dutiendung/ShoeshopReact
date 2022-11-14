import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss';

import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import VideoHome from '~/layouts/components/VideoHome';
const cx = classNames.bind(style);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            {children.type.name === 'Home' && <VideoHome />}
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;

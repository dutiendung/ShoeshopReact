import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from './Register.module.scss';
const cx = classNames.bind(style);
function Login() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Tạo tài khoản mới</div>
            <form action="">
                <input placeholder="name" />
                <input type={'email'} placeholder="username" />
                <input type={'password'} placeholder="password" />
                <input type={'password'} placeholder="cofirmPassword" />
                <input type={'submit'} value={'Đăng nhập'} />
            </form>
            <div className={cx('register')}>
                Bạn đã có tài khoản? <Link to={'/register'}>Đăng nhập</Link>
            </div>
        </div>
    );
}

export default Login;

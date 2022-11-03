import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from './Login.module.scss';
const cx = classNames.bind(style);
function Login() {
    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon className={cx('userIcon')} icon={faUser} />
            <form action="">
                <input type={'email'} placeholder="username" />
                <input type={'password'} placeholder="password" />
                <br />
                <div className={cx('accountAction')}>
                    <input type={'checkbox'} />
                    Nhớ tài khoản
                    <Link to={'#'}>Quên mật khẩu</Link>
                </div>
                <input type={'submit'} value={'Đăng nhập'} />
            </form>
            <div className={cx('register')}>
                Bạn chưa có tài khoản? <Link to={'/register'}>Đăng kí</Link>
            </div>
        </div>
    );
}

export default Login;

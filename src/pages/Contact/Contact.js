import classNames from 'classnames/bind'
import { useEffect } from 'react'
import style from './Contact.module.scss'
const cx = classNames.bind(style)
function Contact() {
    useEffect(() => {
        document.title = 'DStore - Liên hệ với chúng tôi'
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Liên hệ với chúng tôi</h2>
            <p>Địa chỉ: Phước Long B, TP Thủ Đức, TP Hồ Chí Minh</p>
            <p>
                Email:
                <a href="mailto:dutiendungg@gmail.com">dutiendungg@gmail.com</a>
            </p>
            <p>
                Số điện thoại liên hệ: <br />
                <a href="tel:0333499547">0333499547</a>
            </p>
            <p className={cx('italic')}>Thời gian làm việc: 7h-19h</p>
            <form action="#">
                <label htmlFor={'name'}>Tên của bạn</label>
                <input id="name" type={'input'} />
                <br />
                <label htmlFor={'email'}>Email của bạn *</label>
                <input id="email" type={'input'} />
                <br />
                <label htmlFor={'textarea'}>Thắc mắc *</label>
                <textarea id="textarea" type={'input'} />
                <br />
                <p className={cx('italic')}>
                    * Các yếu tố đầu vào có dấu hoa thị là bắt buộc và phải được
                    điền vào.
                </p>
                <input type={'checkbox'} />
                {'  '}
                Tôi đồng ý với cái {'  '}
                <a href="">điều khoản </a> <br />
                <div className={cx('submit')}>
                    <input type={'submit'} value={'Send'} />
                </div>
            </form>
        </div>
    )
}
export default Contact

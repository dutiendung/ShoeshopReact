import classNames from 'classnames/bind'

import {
    faEnvelope,
    faLocationDot,
    faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logoMastercard from '~/assets/img-footer/methodPayment/mastercard.png'
import logoMomo from '~/assets/img-footer/methodPayment/momo.png'
import logoVisa from '~/assets/img-footer/methodPayment/visa.jpg'
import logoVnpay from '~/assets/img-footer/methodPayment/vnpay.png'
import logoZalopay from '~/assets/img-footer/methodPayment/zalopay.png'
import style from './Footer.module.scss'

const cx = classNames.bind(style)
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('func')}>
                    <div className={cx('methodPayment')}>
                        <div className={cx('title')}>
                            PHƯƠNG THỨC THANH TOÁN
                        </div>
                        <a href="#">
                            <img src={logoMomo}></img>
                        </a>
                        <a href="#">
                            <img src={logoVisa}></img>
                        </a>
                        <a href="#">
                            <img src={logoMastercard}></img>
                        </a>
                        <a href="#">
                            <img src={logoVnpay}></img>
                        </a>
                        <a href="#">
                            <img src={logoZalopay}></img>
                        </a>
                    </div>
                    <div className={cx('term')}>
                        <div className={cx('title')}>CHÍNH SÁCH</div>
                        <div className={cx('item')}>
                            <a href="#">Chính sách bảo mật</a>
                            <a href="#">Chính sách vận chuyển</a>
                            <a href="#">Chính sách đổi trả, bảo hành</a>
                        </div>
                    </div>
                    <div className={cx('contact')}>
                        <div className={cx('title')}>CONTACT INFO</div>
                        <div className={cx('item')}>
                            <div>
                                <i>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </i>
                                Phước Long B, TP Thủ Đức, TP Hồ Chí Minh
                            </div>
                            <div>
                                <i>
                                    <FontAwesomeIcon icon={faPhone} />
                                </i>
                                <a href="tel:0333499548">0333499548</a>
                            </div>
                            <div>
                                <i>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </i>
                                <a href="mailto:dungtiendtd@gmail.com">
                                    dungtiendtd@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('copyright')}>
                    <div>
                        Copyright ©2023 All rights reserved | This template is
                        made with by Du Tien Dung
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

import classNames from 'classnames/bind';
import ProductCard from '~/components/ProductCard';

import style from './Search.module.scss';
const cx = classNames.bind(style);
function Search({ data = {} }) {
    return <div className={cx('wrapper')}></div>;
}

export default Search;

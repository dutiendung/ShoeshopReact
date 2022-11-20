import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import style from './ColorFilter.module.scss';
const cx = classNames.bind(style);
function ColorFilter({ onChange }) {
    const [colors, setColors] = useState([]);
    const colorList = ['trắng', 'đen', 'đỏ', 'hồng', 'vàng', 'xanh'];

    const handleSizeChange = (size) => {
        setColors((prev) => {
            if (colors.includes(size)) {
                return prev.filter((x) => x !== size);
            } else {
                return [...prev, size];
            }
        });
    };
    useEffect(() => {
        onChange(colors);
    }, [colors]);
    return (
        <div className={cx('wrapper')}>
            {colorList.map((color) => {
                return (
                    <label key={color} className={cx('checkbox-container')}>
                        <input
                            type="checkbox"
                            checked={colors.includes(color)}
                            onChange={() => handleSizeChange(color)}
                        />
                        <span className={cx('checkmark')}></span>
                        {'  '}
                        {`Màu ${color}`}
                    </label>
                );
            })}
        </div>
    );
}

export default ColorFilter;

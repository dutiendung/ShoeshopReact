import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import style from './SizeFilter.module.scss';
const cx = classNames.bind(style);
function SizeFilter({ onChange }) {
    const [sizes, setSizes] = useState([]);
    const sizesList = [36, 37, 38, 39];

    const handleSizeChange = (size) => {
        setSizes((prev) => {
            if (sizes.includes(size)) {
                return prev.filter((x) => x !== size);
            } else {
                return [...prev, size];
            }
        });
    };
    useEffect(() => {
        onChange(sizes);
    }, [sizes]);
    return (
        <div className={cx('wrapper')}>
            {sizesList.map((size) => {
                return (
                    <label key={size} className={cx('checkbox-container')}>
                        <input
                            type="checkbox"
                            checked={sizes.includes(size)}
                            onChange={() => handleSizeChange(size)}
                        />
                        <span className="checkmark"></span>
                        {'  '} {size}
                    </label>
                );
            })}
        </div>
    );
}

export default SizeFilter;

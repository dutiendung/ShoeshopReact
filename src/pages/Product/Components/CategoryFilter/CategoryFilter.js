import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import categoryService from '~/services/categoryService';
import style from './CategoryFilter.module.scss';
const cx = classNames.bind(style);
function CategoryFilter({ onChange }) {
    const [categories, setCategories] = useState([]);
    const [filterCategoryIds, setCategoryFilterIds] = useState([]);

    useEffect(() => {
        categoryService.getAll().then((data) => {
            setCategories(data);
        });
    }, []);
    const handleCategoryChange = (id) => {
        setCategoryFilterIds((prev) => {
            if (filterCategoryIds.includes(id)) {
                return prev.filter((x) => x !== id);
            } else {
                return [...prev, id];
            }
        });
    };
    useEffect(() => {
        onChange(filterCategoryIds);
    }, [filterCategoryIds]);
    return (
        <div className={cx('wrapper')}>
            {categories.map((category) => {
                return (
                    <label
                        key={category.id}
                        className={cx('checkbox-container')}
                    >
                        <input
                            type="checkbox"
                            checked={filterCategoryIds.includes(category.id)}
                            onChange={() => handleCategoryChange(category.id)}
                        />
                        <span className="checkmark"></span>
                        {'  '} {category.name}
                    </label>
                );
            })}
        </div>
    );
}

export default CategoryFilter;

import React from 'react';
import './category.scss';

function Category() {
  const category = ['Все', 'Новые', 'С пробегом'];

  const [active, setActive] = React.useState(0);
  const onClickActive = (index) => {
    setActive(index);
  };
  return (
    <div className="btn-category" role="group" aria-label="Basic radio toggle button group">
      <p className="btn-category-text">Показать авто:</p>

      {category.map((categoryName, i) => (
        <label
          onClick={() => onClickActive(i)}
          className={active == i ? 'btn btn-category-primary active' : 'btn btn-category-primary'}>
          {categoryName}
        </label>
      ))}
    </div>
  );
}

export default Category;

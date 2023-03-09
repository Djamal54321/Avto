import React from 'react';
import './categoryCar.scss';

function CategoryCar() {
  const categories = ['мотоциклы', 'легковые', 'внедорожники', 'грузовые', 'истребители', 'танки'];

  return (
    <div className="category">
      <ul className="categoryCar">
        {categories.map((categoryName, i) => (
          <button className="btn btn-car">{categoryName}</button>
        ))}
      </ul>
    </div>
  );
}

export default CategoryCar;

import React from 'react';
import './categoryCar.scss';

function CategoryCar() {
  let category = ['мотоциклы', 'легковые', 'внедорожники', 'грузовые', 'истребители'];

  return (
    <div className="categoryCar">
      <button className="btn-car">мотоциклы</button>
      <button className="btn-car">легковые</button>
      <button className="btn-car">внедорожники</button>
      <button className="btn-car">грузовые</button>
      <button className="btn-car">истребители</button>
    </div>
  );
}

export default CategoryCar;

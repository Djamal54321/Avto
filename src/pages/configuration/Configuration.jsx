import React from 'react';
import CategoryCar from './Category/Category';
import Filter from './Filter/Filter';

function Main() {
  return (
    <div className="body">
      <div className="bodyDate">
        <CategoryCar />
        <Filter />
      </div>
    </div>
  );
}

export default Main;

import React from 'react';
import './StateCar.scss';

function StateCar() {
  const [active, setActive] = React.useState(0);
  const onClickActive = (index) => {
    setActive(index);
  };
  return (
    <div className="stateCar" role="group" aria-label="Large button group">
      <div className="btn-stateCar">
        <button type="button" className="btn btn-stateCar">
          Все
        </button>
        <button type="button" className="btn btn-stateCar">
          Кроме битых
        </button>
        <button type="button" className="btn btn-stateCar">
          Битые
        </button>
      </div>
    </div>
  );
}

export default StateCar;

function Korobka() {
  const category = ['Автоматическая', 'Робот', 'Вариатор', 'Механика'];

  return (
    <div className="btn-group car" role="group">
      <button
        type="button"
        className="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        Коробка
      </button>
      <ul className="dropdown-menu">
        {category.map((categoryName) => (
          <li>
            <a className="dropdown-item" href="#">
              {categoryName}
            </a>
          </li>
        ))}

        <li>
          <a className="dropdown-item" href="#">
            <p>Коробка или ящик — негерметичная</p>
            <p>ёмкость в форме многогранника</p>
            <p>(чаще всего — прямоугольного</p>
            <p>параллелепипеда), выполненная</p>
            <p>из картона или другого плотного материала.</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Korobka;

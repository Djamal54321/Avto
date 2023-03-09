function Marka() {
  const category = ['Toyota', 'Kia', 'Tesla', 'Ferrari'];
  return (
    <div className="btn-group car" role="group">
      <button
        type="button"
        className="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        Марка
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
            <p>Продукция "АВТОВАЗ" - </p>
            <p>в категории "Вёдра!"</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Marka;

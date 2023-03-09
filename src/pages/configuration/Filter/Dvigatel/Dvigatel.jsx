function Dvigatel() {
  const category = ['Бензин', 'Дизель', 'Электро', 'Гибрид'];

  return (
    <div className="btn-group car" role="group">
      <button
        type="button"
        className="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        Двигатель
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
            <p>Двигатель — устройство,</p>
            <p>преобразующее какой-либо</p>
            <p>вид энергии в механическую работу.</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Dvigatel;

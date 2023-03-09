function Volume() {
  return (
    <div className="btn-group car" role="group">
      <button
        type="button"
        className="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        Объем
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            0.2 л. - 0.5 л.
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            0.6 л. - 1.0 л.
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            1.1 л. - 1.5 л.
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            1.6 л. - 2.0 л.
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            2.0 л. - 2.5 л.
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            2.6 л. - 3.0 л.
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            3.1 л. - 3.5 л.
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            3.6 л. - 4.0 л.
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            V = a * b * c
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Volume;

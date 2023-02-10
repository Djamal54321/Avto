import React from 'react';
import bootstrap from 'bootstrap';
import './filter.scss';

function Filter() {
  return (
    <div className="filter">
      <div className="filterClass">
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio1"
            autocomplete="off"
            checked
          />
          <label class="btn btn-outline-primary" for="btnradio1">
            Все
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autocomplete="off"
          />
          <label class="btn btn-outline-primary" for="btnradio2">
            Новые
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio3"
            autocomplete="off"
          />
          <label class="btn btn-outline-primary" for="btnradio3">
            С пробегом
          </label>
        </div>

        <div class="btn-group" role="group">
          <button
            type="button"
            class="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            Марка
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Toyota
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Kia
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Tesla
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Ferrari
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filter;

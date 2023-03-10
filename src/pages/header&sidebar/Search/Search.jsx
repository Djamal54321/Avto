import React from 'react';

function Search() {
  return (
    <span className="searchClass">
      <svg
        className="icon"
        fill="none"
        height="48"
        viewBox="0 0 48 48"
        width="48"
        xmlns="http://www.w3.org/2000/svg">
        <rect fill="white" fill-opacity="0.01" height="48" width="48" />
        <path
          d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"
          fill="#2F88FF"
          stroke="black"
          stroke-linejoin="round"
          stroke-width="4"
        />
        <path
          d="M26.6568 14.3431C25.2091 12.8954 23.2091 12 21 12C18.7909 12 16.7909 12.8954 15.3431 14.3431"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
        />
        <path
          d="M33.2218 33.2218L41.7071 41.7071"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
        />
      </svg>
      <input type="search" className="search" placeholder="Поиск..." />
      <button className="submit" type="submit">
        Войти
      </button>
    </span>
  );
}

export default Search;

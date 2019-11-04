import React from 'react';
import './searching.scss';

function Search() {
    return (
      <div className="searching">
        <label>
          <input type="checkbox" />
          <input className="searching__input" placeholder="Search"/>
          <div className="searching__btn">
            <i className="fas fa-search"></i>
          </div>
        </label>
      </div>
    );
}

export default Search;
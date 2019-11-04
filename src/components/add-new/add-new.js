import React from 'react';
import './add-new.scss';
import Search from '../searching/searching';

function AddNew() {
    return (
      <form className="form">
        <div className="add-new-container">
          <div className="director">
            <div className="form__smart-state">
              <div>
                <input id="cloud-state" type="radio" name="hadeeth-type" />
                <label htmlFor="cloud-state">
                  <i className="fas fa-cloud"></i>
                </label>
              </div>
              <div>
                <input id="person-state" type="radio" name="hadeeth-type" />
                <label htmlFor="person-state">
                  <i className="fas fa-user"></i>
                </label>
              </div>
              <div>
                <input id="group-state" type="radio" name="hadeeth-type" />
                <label htmlFor="group-state">
                  <i className="fas fa-users"></i>
                </label>
              </div>
            </div>
            <div className="director__search">
              <Search />
            </div>
          </div>
          <textarea rows="5" placeholder="The content"></textarea>
          <div className="control">
            <button type="submit" onClick={(e) => e.preventDefault()}>
              Send Request <i className="fas fa-angle-double-right"></i>
            </button>
          </div>
        </div>
      </form>
    );
}

export default AddNew;
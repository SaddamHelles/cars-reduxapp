import React from 'react';
import { changeSearchTerm } from '../store';
import { useDispatch, useSelector } from 'react-redux';

const CarSearch = () => {
  const searchTerm = useSelector(state => state.cars.searchTerm);
  const dispatch = useDispatch();
  // const handleSubmit = event => {
  //   event.preventDefault();
  // };

  const handleSearchTerm = event => {
    const { value } = event.target;
    dispatch(changeSearchTerm(value));
  };
  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>

      {/* <form onSubmit={handleSubmit}> */}
      <div className="search field is-horizontal">
        <div className="field">
          <label className="label" htmlFor="search">
            Search
          </label>
          <input
            className="input"
            value={searchTerm}
            onChange={handleSearchTerm}
            type="text"
            id="search"
          />
        </div>
        {/* <div className="field">
          <button className="button">Seatch</button>
        </div> */}
      </div>
      {/* </form> */}
    </div>
  );
};

export default CarSearch;

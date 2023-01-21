import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost, addCar } from '../store';

const CarForm = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector(state => state.form);

  const handleNameChange = event => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = event => {
    const { value, defaultValue } = event.target;

    if (+defaultValue === 0) event.target.value = '';
    dispatch(changeCost(+value));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
    event.target[0].focus();
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label htmlFor="name" className="label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="field">
            <label htmlFor="cost" className="label">
              Cost:
            </label>
            <input
              type="number"
              id="cost"
              className="input is-expanded"
              value={cost}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Add car</button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;

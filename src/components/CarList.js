import React from 'react';
import { removeCar } from '../store';
import { useDispatch, useSelector } from 'react-redux';
const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(({ cars: { data, searchTerm } }) => {
    return data.filter(car =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const carName = useSelector(state => state.form.name);

  const handleCarDelete = id => {
    dispatch(removeCar(id));
  };

  // let carsList = cars;
  // if (searchTerm)
  //   carsList = cars.filter(car => car.name.includes(String(searchTerm)));

  const renderedCars = cars?.map(car => {
    const bold =
      car.name.toLowerCase().includes(carName.toLowerCase() || false) &&
      'font-bold';
    return (
      <div key={car.id} className={`panel ${bold}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car.id)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div>
      <div className="car-list">{renderedCars}</div>
    </div>
  );
};

export default CarList;

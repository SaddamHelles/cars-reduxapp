import React from 'react';
import { useSelector } from 'react-redux';

const CarValue = () => {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    const filteredCars = data.filter(car =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredCars.reduce((acc, curCar) => acc + curCar.cost, 0);
  });

  return (
    <div className="car-value">
      Total Cost:
      <span> ${totalCost}</span>
    </div>
  );
};

export default CarValue;

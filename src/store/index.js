import { configureStore } from '@reduxjs/toolkit';
import {
  addCar,
  removeCar,
  changeSearchTerm,
  carsReducer,
} from './slices/carsSlice';
import { changeName, changeCost, formReducer } from './slices/formSlice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export {
  changeName,
  changeCost,
  formReducer,
  addCar,
  removeCar,
  changeSearchTerm,
};


import { createStore } from 'redux';
import todoReducer from './reducer';

// Creating Redux store with todoReducer
const store = createStore(todoReducer);

export default store;

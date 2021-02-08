import Flights from './flights';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	flights: Flights,
});

export default allReducers;

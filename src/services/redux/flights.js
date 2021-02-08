const ADD_FLIGHT = 'ADD_FLIGHT';
const SET_ALERT = 'SET_ALERT';

const defaultState = {
	flights: [{ from: 'israel', to: 'usa', departureTime: 60, landingTime: 30, price: 150 }],
	openAlert: false,
};

export default function reducer(state = defaultState, action) {
	const newState = Object.assign([], state);

	switch (action.type) {
		case ADD_FLIGHT:
			newState.flights = [...newState.flights, action.payload];
			return newState;
		case SET_ALERT:
			newState.openAlert = action.payload;
			return newState;

		default:
			return newState;
	}
}

export const addFlight = (flight) => {
	return (dispatch) => {
		const payload = flight;
		dispatch({ type: ADD_FLIGHT, payload });
	};
};
export const setAlert = (boolean) => {
	return (dispatch) => {
		const payload = boolean;
		dispatch({ type: SET_ALERT, payload });
	};
};

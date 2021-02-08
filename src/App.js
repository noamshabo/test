import './App.css';

import { Provider } from 'react-redux';
import { store } from './services/store/store';
import Login from './pages/login/login';
import ListOfFlights from './pages/list-of-flights/list-of-flights';
import { AppContainer } from './App.style';
import { Route, Switch, BrowserRouter as Router, useHistory, Redirect } from 'react-router-dom';
import AddFlight from './pages/add-flight/add-flight';

function App() {
	return (
		<Provider store={store}>
			<AppContainer>
				<Router>
					<Switch>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/flights">
							<ListOfFlights />
						</Route>
						<Route exact path="/add-flight">
							<AddFlight />
						</Route>
						<Route exact>
							<Login />
						</Route>
					</Switch>
				</Router>
			</AppContainer>
		</Provider>
	);
}

export default App;

import React, { useEffect, useState } from 'react';
import { FlightsContainer, ListContainer } from './list-of-flights.style';
import { HeadText } from '../../components/text';
import { useSelector, useDispatch } from 'react-redux';
import FlightRow from '../../components/flight-row';
import ListOfFlightsHeader from '../../components/list-of-flights-header';
import { RoundButton } from '../../components/round-button';
import { useHistory } from 'react-router-dom';
import { Input } from '../../components/input';
import { useCallback } from 'react';
import { Colors } from '../../services/utils/colors';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { setAlert } from '../../services/redux/flights';

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
}));

const ListOfFlights = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const flights = useSelector((state) => state.flights.flights);
	const openAlert = useSelector((state) => state.flights.openAlert);
	const [flightsData, setFlightsData] = useState([]);
	useEffect(() => {
		setFlightsData(flights);
	}, []);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		dispatch(setAlert(false));
	};

	const onSearch = useCallback(
		(e) => {
			setFlightsData(
				flights.filter((item) => {
					return item.to.toLowerCase().includes(e.target.value.toLowerCase());
				})
			);
		},
		[flights]
	);

	return (
		<FlightsContainer>
			<i
				class="fas fa-door-open"
				onClick={() => {
					history.push('/login');
				}}
				style={{
					fontSize: '30px',
					position: 'absolute',
					top: '-40px',
					left: '10px',
					cursor: 'pointer',
					color: Colors.gray,
				}}
			/>
			<RoundButton
				style={{ position: 'absolute', top: '-60px', right: '10px' }}
				onClick={() => {
					history.push('/add-flight');
				}}
			>
				<i class="fas fa-plus" style={{ marginRight: '10px' }}></i>
				Add
			</RoundButton>
			<Input
				type="text"
				placeholder="search..."
				onChange={(e) => onSearch(e)}
				style={{ margin: '30px' }}
			/>
			<HeadText style={{ marginBottom: '40px' }}>Flights</HeadText>
			<ListOfFlightsHeader />
			{flightsData.length === 0 && (
				<HeadText style={{ marginTop: '100px' }}>No Flights</HeadText>
			)}
			<ListContainer>
				{flightsData.length > 0 &&
					flightsData.map((item, index) => {
						return <FlightRow item={item} />;
					})}
			</ListContainer>
			<Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="success">
					Flight added successfully
				</Alert>
			</Snackbar>
		</FlightsContainer>
	);
};

export default ListOfFlights;

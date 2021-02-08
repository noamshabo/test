import React, { useState } from 'react';

import { RoundButton } from '../../components/round-button';
import { AddFlightsContainer } from './add-flight.style';
import { HeadText, ErrorText } from '../../components/text';
import { Input } from '../../components/input';
import { useDispatch } from 'react-redux';
import { addFlight, setAlert } from '../../services/redux/flights';
import { useHistory } from 'react-router-dom';
import { Colors } from '../../services/utils/colors';

const AddFlight = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [from, setFrom] = useState('');
	const [to, setTo] = useState('');
	const [departureTime, setDepartureTime] = useState('');
	const [landingTime, setLandingTime] = useState('');
	const [price, setPrice] = useState('');
	const [error, setError] = useState('');

	const onSubmit = () => {
		if (!from || !to || !departureTime || !landingTime || !price) {
			setError('fill all fields please');
			return;
		}
		const data = {
			from,
			to,
			departureTime,
			landingTime,
			price,
		};
		dispatch(addFlight(data));
		dispatch(setAlert(true));
		history.push('/flights');
	};
	return (
		<AddFlightsContainer>
			<i
				class="fas fa-arrow-left"
				onClick={() => {
					history.goBack();
				}}
				style={{
					fontSize: '30px',
					position: 'absolute',
					top: '20px',
					left: '20px',
					cursor: 'pointer',
					color: Colors.gray,
				}}
			/>
			<HeadText fontSize={40}>Add Flight</HeadText>
			<Input
				placeholder="From"
				onChange={(e) => setFrom(e.target.value)}
				style={{ marginBottom: '30px' }}
			/>
			<Input
				placeholder="To"
				onChange={(e) => setTo(e.target.value)}
				style={{ marginBottom: '30px' }}
			/>
			<Input
				type="number"
				placeholder="Departure time (min)"
				onChange={(e) => setDepartureTime(e.target.value)}
				style={{ marginBottom: '30px' }}
			/>
			<Input
				type="number"
				placeholder="Landing time (min)"
				onChange={(e) => setLandingTime(e.target.value)}
				style={{ marginBottom: '30px' }}
			/>
			<Input
				type="number"
				placeholder="Price ($)"
				onChange={(e) => setPrice(e.target.value)}
				style={{ marginBottom: '30px' }}
			/>
			{error && <ErrorText>{error}</ErrorText>}
			<RoundButton onClick={() => onSubmit()}>Save</RoundButton>
		</AddFlightsContainer>
	);
};

export default AddFlight;

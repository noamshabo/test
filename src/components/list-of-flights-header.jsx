import React from 'react';
import { ItemFlex, FlightRowHeaderContainer } from '../pages/list-of-flights/list-of-flights.style';

const ListOfFlightsHeader = () => {
	return (
		<FlightRowHeaderContainer>
			<ItemFlex flex={1}>From</ItemFlex>
			<ItemFlex flex={1}>To</ItemFlex>
			<ItemFlex flex={1}>Departure time</ItemFlex>
			<ItemFlex flex={1}>Landing time</ItemFlex>
			<ItemFlex flex={1}>Price</ItemFlex>
		</FlightRowHeaderContainer>
	);
};

export default ListOfFlightsHeader;

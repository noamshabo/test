import React from 'react';
import { CardContainer, ItemFlex, Row } from '../pages/list-of-flights/list-of-flights.style';
import { CommonText } from './text';

const FlightRow = (props) => {
	return (
		<Row>
			<CardContainer>
				<ItemFlex flex={1}>
					<CommonText>{props.item.from}</CommonText>
				</ItemFlex>
				<ItemFlex flex={1}>
					<CommonText>{props.item.to}</CommonText>
				</ItemFlex>
				<ItemFlex flex={1}>
					<CommonText>{props.item.departureTime}min</CommonText>
				</ItemFlex>
				<ItemFlex flex={1}>
					<CommonText>{props.item.landingTime}min</CommonText>
				</ItemFlex>
				<ItemFlex flex={1}>
					<CommonText>{props.item.price}$</CommonText>
				</ItemFlex>
			</CardContainer>
		</Row>
	);
};

export default FlightRow;

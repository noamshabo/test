import styled from 'styled-components';
import { Colors } from '../services/utils/colors';

export const Button = styled.span`
	cursor: pointer;
	transition: all 0.2s;
	&:hover {
		transform: translateY(-3px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	}
	&:active,
	&:focus {
		outline: none;
		transform: translateY(-0.1rem);
		box-shadow: 0 5px 1px rgba(0, 0, 0, 0.2);
	}
`;

export const RoundButton = styled(Button)`
	padding: 10px 60px;
	border-radius: 8px;
	/* border: 2px solid ${(p) => p.color}; */
	background-color: ${(p) => p.backgroundColor || Colors.secondary};
	font-size: ${(p) => p.fontSize || 25}px;
	color: ${(p) => p.color || Colors.white};
	justify-content: center;
	font-weight: 600;

	cursor: pointer;
`;

import styled from 'styled-components';
import { Colors } from '../services/utils/colors';

export const HeadText = styled.h1`
	color: ${(p) => p.color || Colors.grayDark1};
	font-size: ${(p) => p.fontSize || 30}px;
	font-weight: ${(p) => p.bold || 400};
	font-family: 'Rubik', sans-serif;
`;
export const CommonText = styled.h1`
	color: ${(p) => p.color || Colors.grayDark2};
	font-size: ${(p) => p.fontSize || 20}px;
	font-weight: 400;
	font-family: 'Rubik', sans-serif;
`;

export const ErrorText = styled.h1`
	color: ${(p) => p.color || Colors.pink};
	font-size: ${(p) => p.fontSize || 20}px;
	font-weight: 400;
	font-family: 'Rubik', sans-serif;
`;

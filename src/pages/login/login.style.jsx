import styled from 'styled-components';
import { Colors } from '../../services/utils/colors';

export const LoginContainer = styled.div`
	border-radius: 20px;
	padding: 60px 100px;
	width: 30%;
	height: 80%;
	min-height: 600px;
	box-shadow: 0 1px 2px ${Colors.gray};
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
	background: ${Colors.white};
`;

export const Logo = styled.div`
	padding: 20px;
	border-radius: 12px;
	background: ${Colors.textGray};
	margin-bottom: 30px;
`;

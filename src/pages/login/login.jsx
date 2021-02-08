import React, { useState } from 'react';
import { LoginContainer, Logo } from './login.style';
import { HeadText, ErrorText } from '../../components/text';
import { Input } from '../../components/input';
import { RoundButton } from '../../components/round-button';
import { useHistory } from 'react-router-dom';
import { Colors } from '../../services/utils/colors';

const Login = () => {
	const history = useHistory();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const login = () => {
		console.log(username, password);
		if (username !== 'user' || password !== 'password') {
			setError('username or password is incorrect');
			return;
		}
		setError('');
		history.push('/flights');
	};

	return (
		<LoginContainer>
			<HeadText style={{ marginBottom: '40px' }} fontSize={50} bold={600}>
				Flighty
			</HeadText>
			<Logo>
				<i class="fas fa-plane" style={{ fontSize: '80px', color: Colors.white }} />
			</Logo>

			<Input
				type="text"
				placeholder="username"
				onChange={(e) => setUsername(e.target.value)}
				style={{ marginBottom: '10px' }}
			/>
			<Input
				type="password"
				placeholder="password"
				onChange={(e) => setPassword(e.target.value)}
				style={{ marginBottom: '100px' }}
			/>
			{error && <ErrorText style={{ marginBottom: '20px' }}>{error}</ErrorText>}
			<RoundButton
				type="submit"
				onClick={() => {
					login();
				}}
			>
				Login
			</RoundButton>
		</LoginContainer>
	);
};

export default Login;

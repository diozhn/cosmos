import styled from "styled-components";

import { COLORS } from "assets/colors";

export const SignInSignUp = styled.button<{ primary?: boolean }>`
	background: ${props => (props.primary ? COLORS.darkBlueGray : COLORS.white)};
	color: ${props => (props.primary ? COLORS.white : COLORS.darkBlueGray)};

	font-size: 1.2rem;
	font-weight: 700;
	font-family: Poppins;
	font-style: normal;
	font-feature-settings: "liga" off;
	text-align: center;
	line-height: 1.25rem;
	margin: 1rem;
	padding: 1.2rem 1.2rem;
	border: 0.125rem solid ${COLORS.darkBlueGray};
	border-radius: 0.5rem;
	cursor: pointer;
`;

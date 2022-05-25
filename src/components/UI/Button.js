import styled from "styled-components";

const Btn = styled.button`
	width: 100%;
	height: ${(props) => (props.small ? "30px" : "40px")};
	margin: ${(props) => (props.margin ? props.margin : "0")};
	text-align: center;
	font-weight: 500;
	font-size: ${(props) => (props.small ? "14px" : "16px")};
	color: ${(props) => {
		if (props.theme === "gray") {
			return ({ theme }) => theme.black;
		} else if (props.theme === "sky") {
			return ({ theme }) => theme.primary;
		} else if (props.theme === "red") {
			return ({ theme }) => theme.red;
		} else {
			return ({ theme }) => theme.white;
		}
	}};
	background: ${(props) => {
		if (props.theme === "gray") {
			return ({ theme }) => theme.lightGray;
		} else if (props.theme === "sky") {
			return ({ theme }) => theme.sky;
		} else if (props.theme === "red") {
			return ({ theme }) => theme.lightRed;
		} else {
			return ({ theme }) => theme.primary;
		}
	}};
	border-radius: 6px;
`;

function Button(props) {
	return (
		<Btn small={props.small} theme={props.theme} margin={props.margin} onClick={props.onClick}>
			{props.children}
		</Btn>
	);
}

export default Button;

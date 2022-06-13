import styled from "styled-components";

const Btn = styled.button`
	width: 100%;
	height: ${(props) => (props.small ? "30px" : "40px")};
	margin: ${(props) => (props.margin ? props.margin : "0")};
	text-align: center;
	${(props) => {
		if (props.small) {
			return ({ theme }) => theme.font("sm", 700);
		} else {
			return "font-weight: 700";
		}
	}};
	color: ${(props) => {
		if (props.type === "gray") {
			return ({ theme }) => theme.black;
		} else if (props.type === "sky") {
			return ({ theme }) => theme.primary;
		} else if (props.type === "red") {
			return ({ theme }) => theme.red;
		} else {
			return ({ theme }) => theme.white;
		}
	}};
	background: ${(props) => {
		if (props.type === "gray") {
			return ({ theme }) => theme.lightGray;
		} else if (props.type === "sky") {
			return ({ theme }) => theme.sky;
		} else if (props.type === "red") {
			return ({ theme }) => theme.lightRed;
		} else {
			return ({ theme }) => theme.primary;
		}
	}};
	border-radius: 6px;
`;

function Button(props) {
	return (
		<Btn small={props.small} type={props.type} margin={props.margin} onClick={props.onClick}>
			{props.children}
		</Btn>
	);
}

export default Button;

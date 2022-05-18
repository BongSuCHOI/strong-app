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
			return "#000";
		} else if (props.theme === "sky") {
			return "#35a7ff";
		} else if (props.theme === "red") {
			return "#de6769";
		} else {
			return "#fff";
		}
	}};
	background: ${(props) => {
		if (props.theme === "gray") {
			return "#eaeaea";
		} else if (props.theme === "sky") {
			return "#ecf6ff";
		} else if (props.theme === "red") {
			return "#fdefef";
		} else {
			return "#35a7ff";
		}
	}};
	border-radius: 6px;
`;

function Button(props) {
	return (
		<Btn small={props.small} theme={props.theme} margin={props.margin}>
			{props.children}
		</Btn>
	);
}

export default Button;

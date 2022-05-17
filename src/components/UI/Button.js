import styled from "styled-components";

const Btn = styled.button`
	width: 100%;
	height: ${(props) => (props.small ? "30px" : "40px")};
	margin: ${(props) => (props.margin ? props.margin : "0")};
	text-align: center;
	font-weight: 500;
	font-size: ${(props) => (props.small ? "14px" : "16px")};
	color: ${(props) => (props.theme === "gray" ? "#000" : "#fff")};
	background: ${(props) => (props.theme === "gray" ? "#eaeaea" : "#35a7ff")};
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

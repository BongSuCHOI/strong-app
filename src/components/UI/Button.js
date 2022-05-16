import styled from "styled-components";

const Btn = styled.button`
	width: 100%;
	height: ${(props) => (props.small ? "25px" : "40px")};
	text-align: center;
	color: ${(props) => (props.theme === "gray" ? "#000" : "#fff")};
	background: ${(props) => (props.theme === "gray" ? "#eaeaea" : "#35a7ff")};
	border-radius: 6px;
	font-size: 16px;
`;

function Button(props) {
	return <Btn>{props.children}</Btn>;
}

export default Button;

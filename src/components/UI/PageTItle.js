import styled from "styled-components";

const TitleBox = styled.div`
	& button {
		display: block;
		height: 16px;
		margin: 20px 0;
		text-align: ${(props) => (props.subAlign === "right" ? "right" : "left")};
		color: ${({ theme }) => theme.primary};
	}
	& h2 {
		margin-bottom: 50px;
		${({ theme }) => theme.font("title")};
	}
`;

function PageTitle(props) {
	return (
		<TitleBox subAlign={props.subAlign}>
			<button>{props.subActionName}</button>
			<h2>{props.children}</h2>
		</TitleBox>
	);
}

export default PageTitle;

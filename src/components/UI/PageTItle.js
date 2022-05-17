import styled from "styled-components";

const TitleBox = styled.div`
	& button {
		display: block;
		height: 16px;
		margin: 20px 0;
		text-align: ${(props) => (props.subAlign === "right" ? "right" : "left")};
		font-size: 16px;
		color: #35a7ff;
	}
	& h2 {
		margin-bottom: 50px;
		font-size: 31px;
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

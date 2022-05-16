import styled from "styled-components";

const LayoutBox = styled.div`
	position: relative;
	width: 100%;
	padding: 0 15px;
	margin-bottom: 70px;
`;

function Layout(props) {
	return <LayoutBox>{props.children}</LayoutBox>;
}

export default Layout;

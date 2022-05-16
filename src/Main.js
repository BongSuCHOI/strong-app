import styled from "styled-components";

import PageTitle from "./components/UI/PageTItle";
import Button from "./components/UI/Button";
import TemplateList from "./components/TemplateList/TemplateList";

const QuickStart = styled.div`
	margin-bottom: 40px;

	& p {
		margin-bottom: 20px;
		font-weight: 700;
	}
`;

const Template = styled.div`
	padding-bottom: 40px;

	& h3 {
		font-size: 24px;
	}
`;

function Main() {
	return (
		<>
			<PageTitle>워크아웃 시작</PageTitle>
			<QuickStart>
				<p>빠른 시작</p>
				<Button>비어 있는 워크아웃 시작</Button>
			</QuickStart>
			<Template>
				<h3>템플릿</h3>
				<TemplateList type={"custom"}>내 템플릿</TemplateList>
				<TemplateList type={"example"}>예제 템플릿</TemplateList>
			</Template>
		</>
	);
}

export default Main;

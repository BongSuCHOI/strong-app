import React, { useContext, useState } from "react";

import styled from "styled-components";

import WorkoutContext from "./store/workout-context";
import ModalContext from "./store/modal-context";

import PageTitle from "./components/UI/PageTItle";
import Button from "./components/UI/Button";
import TemplateList from "./components/TemplateList/TemplateList";
import ShowTemplate from "./components/TemplateList/ShowTemplate";

const QuickStart = styled.div`
	margin-bottom: 40px;

	& p {
		margin-bottom: 20px;
		font-weight: 700;
	}
`;

const Template = styled.div`
	padding-bottom: 40px;

	& > h3 {
		font-size: 24px;
	}
`;

function Main() {
	const workoutCtx = useContext(WorkoutContext);
	const modalCtx = useContext(ModalContext);

	const [selectTempData, setSelectTempData] = useState();

	function selectTemplateData(data) {
		setSelectTempData(data);
	}

	return (
		<>
			{modalCtx.isVisible && (
				<ShowTemplate onHideModal={modalCtx.hideModalHandelr} tempData={selectTempData} />
			)}
			<PageTitle>워크아웃 시작</PageTitle>
			<QuickStart>
				<p>빠른 시작</p>
				<Button>비어 있는 워크아웃 시작</Button>
			</QuickStart>
			<Template>
				<h3>템플릿</h3>
				<TemplateList type={"custom"} workoutData={workoutCtx.workout}>
					내 템플릿
				</TemplateList>
				<TemplateList
					type={"example"}
					workoutData={workoutCtx.workout}
					onShowModal={modalCtx.showModalHandelr}
					onSelectTemplateData={selectTemplateData}>
					예제 템플릿
				</TemplateList>
			</Template>
		</>
	);
}

export default Main;

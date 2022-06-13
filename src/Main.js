import React, { useContext, useState } from "react";

import styled from "styled-components";

import WorkoutContext from "./store/workout-context";
import ModalContext from "./store/modal-context";

import PageTitle from "./components/UI/PageTItle";
import Button from "./components/UI/Button";
import TemplateList from "./components/TemplateList/TemplateList";
import ShowTemplate from "./components/TemplateList/ShowTemplate";
import WorkoutForm from "./components/WorkoutForm/WorkoutForm";
import AddWorkout from "./components/WorkoutForm/AddWorkout";

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

/**
 * TODO
//  * 1.커스텀 템플릿 추가 시 내 템플릿(0)에 숫자 카운트 안되는 버그 수정
//  * 2.커스텀 템플릿 삭제 기능 구현
//  * 3.워크아웃 추가 모달 - 워크아웃 검색 기능 구현
 * 4.워크아웃 시작 기능 구현
*    - 운동마다 세트 추가/제거, 무게, 횟수, 세트완료 체크 토글 기능 구현
*    - 동일 워크아웃 이전 기록 노출 기능 구현
*    - 진입 즉시 진행되는 타이머(운동 진행 시간), 좌측상단 아이콘 누르면 나오는 30초, 1분, 1분 30초... 선택 가능 타이머 기능 구현
 * 5.커스텀, 예제 템플릿 선택 후 워크아웃 시작 시 해당 워크아웃으로 워크아웃 시작 기능 구현
 * 6.커스텀 템플릿 워크아웃 리스트 디자인
 * 7.useMemo, useCallBack 등을 통해 전달받은 상태가 변함 없을 시 재랜더링 방지 작업
 * 8.그 외 기타 로직 및 코드 리팩토링
 */

function Main() {
	const workoutCtx = useContext(WorkoutContext);
	const modalCtx = useContext(ModalContext);

	const [selectTempData, setSelectTempData] = useState();
	const [isWorkoutFormOpen, setIsWorkoutFormOpen] = useState({ state: false, type: "" });

	function selectTemplateData(data) {
		setSelectTempData(data);
	}

	function handleOpenWorkoutForm(yn) {
		setIsWorkoutFormOpen(yn);
	}

	const whatModal =
		modalCtx.modalName === "template" ? (
			<ShowTemplate onHideModal={modalCtx.hideModalHandelr} tempData={selectTempData} />
		) : modalCtx.modalName === "addWorkout" ? (
			<AddWorkout onHideModal={modalCtx.hideModalHandelr} />
		) : null;

	return (
		<>
			{modalCtx.isVisible && whatModal}
			{isWorkoutFormOpen.state && (
				<WorkoutForm
					type={isWorkoutFormOpen.type}
					onClose={handleOpenWorkoutForm}
					onShowModal={modalCtx.showModalHandelr}
				/>
			)}
			<PageTitle>워크아웃 시작</PageTitle>
			<QuickStart>
				<p>빠른 시작</p>
				<Button
					onClick={() => {
						handleOpenWorkoutForm({ state: true, type: "workout" });
					}}>
					비어 있는 워크아웃 시작
				</Button>
			</QuickStart>
			<Template>
				<h3>템플릿</h3>
				<TemplateList
					type={"custom"}
					workoutData={workoutCtx.customTemplateWorkout}
					onShowModal={modalCtx.showModalHandelr}
					onSelectTemplateData={selectTemplateData}
					onOpenWorkoutForm={handleOpenWorkoutForm}>
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

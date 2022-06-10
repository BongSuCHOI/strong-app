import React from "react";

const WorkoutContext = React.createContext({
	// 전체 워크아웃 리스트
	workout: [],
	// 선택한 워크아웃 리스트
	selectWorkout: [],
	// 커스텀 워크아웃 템플릿 리스트
	customTemplateWorkout: [],
	// 새로운 워크아웃 리스트
	newWorkout: [],
	// 이전 워크아웃 기록 리스트
	workoutHistory: [],
	// selectWorkout에 리스트 데이터 추가 함수
	addWorkout: () => {},
	// selectWorkout를 파라미터로 받아서 customTemplateWorkout에 저장 함수
	saveCustomTemplate: () => {},
	// customTemplateWorkout중 선택 리스트 제거 함수
	removeCustomTemplate: () => {},
	// selectWorkout를 파라미터로 받아서 newWorkout에 저장 함수
	doneNewWorkout: () => {},
	// selectWorkout 비우는 함수
	clearSelectWorkout: () => {},
});

export default WorkoutContext;

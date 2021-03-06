import React, { useReducer } from "react";

import WorkoutContext from "./workout-context";

import workoutData from "../assets/data/workoutData.json";

const defaultWorkout = {
	workout: workoutData.data,
	selectWorkout: [],
	customTemplateWorkout: [],
};

function workoutReducer(state, action) {
	// ADD
	if (action.type === "ADD") {
		let updateSelectWorkout;

		if (state.selectWorkout.length > 0) {
			// includes 다른거로 개선 가능할까? 데이터가 많아지면 성능에 영향을 줄 거 같음
			const existWorkout = state.selectWorkout.filter(
				(state) => !action.data.includes(state)
			);
			const newWorkout = action.data.filter(
				(action) => !state.selectWorkout.includes(action)
			);
			const updateState = [...existWorkout, ...newWorkout];

			updateSelectWorkout = [...updateState];
		} else {
			updateSelectWorkout = action.data;
		}

		return { ...state, selectWorkout: updateSelectWorkout };
	}

	// CLEAR
	if (action.type === "CLEAR") {
		return { ...state, selectWorkout: [] };
	}

	// ADD CUSTOM TEMP
	if (action.type === "Add-CUSTOM-TEMP") {
		let newCustomTemp;

		if (state.customTemplateWorkout.length > 0) {
			newCustomTemp = state.customTemplateWorkout.concat({
				category: action.data.category,
				data: action.data.data,
			});
		} else {
			newCustomTemp = [{ category: action.data.category, data: action.data.data }];
		}

		return { ...state, customTemplateWorkout: newCustomTemp };
	}

	// REMOVE CUSTOM TEMP
	if (action.type === "REMOVE-CUSTOM-TEMP") {
		// list 컴포넌트에서 category를 upperCase해서 모달로 전달하기 때문에 전체를 소문자로 만들어서 필터링
		const lowerCaseCategory = action.data.category.toLowerCase();
		
		const targetData = state.customTemplateWorkout.filter(
			(data) => data.category !== lowerCaseCategory
		);

		return { ...state, customTemplateWorkout: targetData };
	}

	return { ...state };
}

function WorkoutProvider(props) {
	const [workoutState, dispatchWorkoutAction] = useReducer(workoutReducer, defaultWorkout);

	function handleAddWorkout(data) {
		dispatchWorkoutAction({ type: "ADD", data: data });
	}

	function handleClearSelectWorkout() {
		dispatchWorkoutAction({ type: "CLEAR" });
	}

	function handleSaveCustomTemplate(data) {
		dispatchWorkoutAction({ type: "Add-CUSTOM-TEMP", data: data });
	}

	function handleRemoveCustomTemplate(data) {
		dispatchWorkoutAction({ type: "REMOVE-CUSTOM-TEMP", data: data });
	}

	// context 리네이밍, 파일 분기 필요해보임
	const workoutContext = {
		workout: workoutState.workout,
		selectWorkout: workoutState.selectWorkout,
		customTemplateWorkout: workoutState.customTemplateWorkout,
		saveCustomTemplate: handleSaveCustomTemplate,
		removeCustomTemplate: handleRemoveCustomTemplate,
		addWorkout: handleAddWorkout,
		clearSelectWorkout: handleClearSelectWorkout,
	};

	return (
		<WorkoutContext.Provider value={workoutContext}>{props.children}</WorkoutContext.Provider>
	);
}

export default WorkoutProvider;

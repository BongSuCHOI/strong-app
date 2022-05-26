import React, { useReducer } from "react";

import WorkoutContext from "./workout-context";

import workoutData from "../assets/data/workoutData.json";

const defaultWorkout = {
	workout: workoutData.data,
	selectWorkout: [],
};

function workoutReducer(state, action) {
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
	return { ...state };
}

function WorkoutProvider(props) {
	const [workoutState, dispatchWorkoutAction] = useReducer(workoutReducer, defaultWorkout);

	function handleAddWorkout(data) {
		dispatchWorkoutAction({ type: "ADD", data: data });
	}

	const workoutContext = {
		workout: workoutState.workout,
		selectWorkout: workoutState.selectWorkout,
		addWorkout: handleAddWorkout,
	};

	return (
		<WorkoutContext.Provider value={workoutContext}>{props.children}</WorkoutContext.Provider>
	);
}

export default WorkoutProvider;

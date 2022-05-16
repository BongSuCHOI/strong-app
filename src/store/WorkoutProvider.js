import React, { useReducer } from "react";

import WorkoutContext from "./workout-context";

import workoutData from "../assets/data/workoutData.json";

const defaultWorkout = {
	workout: workoutData.data,
};

function workoutReducer(state, action) {}

function WorkoutProvider(props) {
	const [workoutState, dispatchWorkoutAction] = useReducer(workoutReducer, defaultWorkout);

	const workoutContext = {
		workout: workoutState.workout,
	};

	return (
		<WorkoutContext.Provider value={workoutContext}>{props.children}</WorkoutContext.Provider>
	);
}

export default WorkoutProvider;

import React, { useContext, useState } from "react";

import WorkoutContext from "../../store/workout-context";

import Modal from "../UI/Modal";
import SearchForm from "../UI/SearchForm";
import WorkoutList from "../WorkoutList/WorkoutList";

function AddWorkout(props) {
	const workoutCtx = useContext(WorkoutContext);
	const [selectWorkoutList, setSelectWorkoutList] = useState([]);

	function checkWorkoutList(data) {
		setSelectWorkoutList((prevState) => {
			const existWorkout = prevState.findIndex((state) => state.name === data.name);
			if (prevState[existWorkout]) {
				return prevState.filter((state) => state.name !== prevState[existWorkout].name);
			} else {
				return prevState.concat(data);
			}
		});
	}

	function handleAddWorkout() {
		workoutCtx.addWorkout(selectWorkoutList);
	}

	return (
		// 연결만 해논 상태
		<Modal onHideModal={props.onHideModal} subActionName="추가" onSubAction={handleAddWorkout}>
			<SearchForm />
			<WorkoutList listData={workoutCtx.workout} onClick={checkWorkoutList} height="60vh" />
		</Modal>
	);
}

export default AddWorkout;

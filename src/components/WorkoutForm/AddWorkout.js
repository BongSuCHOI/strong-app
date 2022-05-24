import React, { useContext } from "react";

import WorkoutContext from "../../store/workout-context";

import Modal from "../UI/Modal";
import SearchForm from "../UI/SearchForm";
import WorkoutList from "../WorkoutList/WorkoutList";

function AddWorkout(props) {
	const workoutCtx = useContext(WorkoutContext);

	return (
		// 연결만 해논 상태
		<Modal onHideModal={props.onHideModal} subActionName="추가">
			<SearchForm />
			<WorkoutList listData={workoutCtx.workout} height="60vh" />
		</Modal>
	);
}

export default AddWorkout;

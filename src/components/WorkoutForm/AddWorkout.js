import React, { useContext } from "react";

import styled from "styled-components";

import WorkoutContext from "../../store/workout-context";

import Modal from "../UI/Modal";
import WorkoutList from "../WorkoutList/WorkoutList";

function AddWorkout(props) {
	const workoutCtx = useContext(WorkoutContext);

	return (
        // 연결만 해논 상태
		<Modal onHideModal={props.onHideModal}>
			<WorkoutList listData={workoutCtx.workout} />
		</Modal>
	);
}

export default AddWorkout;

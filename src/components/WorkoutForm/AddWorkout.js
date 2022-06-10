import React, { useContext, useState, useEffect } from "react";

import WorkoutContext from "../../store/workout-context";

import Modal from "../UI/Modal";
import SearchForm from "../UI/SearchForm";
import WorkoutList from "../WorkoutList/WorkoutList";

function AddWorkout(props) {
	const workoutCtx = useContext(WorkoutContext);

	const [selectWorkoutList, setSelectWorkoutList] = useState([]);
	const [enteredInput, setEnteredInput] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");
	const [searchKeyword, setSearchKeyword] = useState("");

	// 입력한 데이터
	useEffect(() => {
		const timer = setTimeout(() => {
			setSearchKeyword(enteredInput);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [enteredInput]);

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

	function handleEnteredInput(e) {
		setEnteredInput(e.target.value);
	}

	function handleSelectedCategory(e) {
		e.preventDefault();
		setSelectedCategory(e.target.value);
	}

	return (
		<Modal
			onHideModal={props.onHideModal}
			subActionName={`추가(${selectWorkoutList.length})`}
			onSubAction={handleAddWorkout}>
			<SearchForm
				onEnteredInput={handleEnteredInput}
				onSelectedCategory={handleSelectedCategory}
				enteredValue={enteredInput}
			/>
			<WorkoutList
				listData={workoutCtx.workout}
				onClick={checkWorkoutList}
				searchKeyword={searchKeyword}
				category={selectedCategory}
				height="60vh"
			/>
		</Modal>
	);
}

export default AddWorkout;

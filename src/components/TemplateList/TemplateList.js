import React, { useContext } from "react";

import List from "./List";

import styled from "styled-components";

import WorkoutContext from "../../store/workout-context";

const TemplateDiv = styled.div`
	margin-top: 30px;

	& .template_count {
		margin-bottom: 20px;
		font-weight: 700;
	}

	& .template_list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		li {
			width: calc(50% - 7.5px);
			height: 120px;
			padding: 15px;
			margin-bottom: 15px;
			border: 1px solid #ccc;
			border-radius: 10px;
			&:nth-last-child(-n + 2) {
				margin-bottom: 0;
			}
			p {
				line-height: 1.3;
				font-weight: 700;
			}
		}
	}
`;

function TemplateList(props) {
	const workoutCtx = useContext(WorkoutContext);

	const exampleWorkout = workoutCtx.workout.filter((data) => data.example);

	const reduceData = exampleWorkout.reduce((acc, curr) => {
		const category = curr["category"];

		if (!acc[category]) {
			acc[category] = [];
		}
		acc[category].push(curr);

		return acc;
	}, {});

	const resArr = Object.entries(reduceData).reduce((acc, [key, val]) => {
		acc.push({ category: key, data: val });
		return acc;
	}, []);

	// const exampleWorkout = workoutCtx.workout.filter((data) => data.example);
	// const chestExample = exampleWorkout.filter((data) => data.category === "chest");
	// const backExample = exampleWorkout.filter((data) => data.category === "back");
	// const legExample = exampleWorkout.filter((data) => data.category === "leg");
	// const shoulderExample = exampleWorkout.filter((data) => data.category === "shoulder");
	// let resArr = [chestExample, backExample, legExample, shoulderExample];

	return (
		<TemplateDiv>
			<p className="template_count">
				{props.children} <span>(0)</span>
			</p>
			<ul className="template_list">
				{props.type === "custom" && <List custom={true} />}
				{props.type === "example" &&
					resArr.map((list) => (
						<List key={list.category} category={list.category} data={list.data}></List>
					))}
			</ul>
		</TemplateDiv>
	);
}

export default TemplateList;

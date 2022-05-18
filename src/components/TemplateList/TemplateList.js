import List from "./List";

import styled from "styled-components";

import { ArrDown } from "../UI/ArrowIcon";

const TemplateDiv = styled.div`
	margin-top: 30px;
`;

const TemplateCount = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	p {
		margin-bottom: 20px;
		font-weight: 700;
	}
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 18px;
		background: #ecf6ff;
		border-radius: 5px;
	}
`;

const TemplateListBox = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

function TemplateList(props) {
	const exampleWorkout = props.workoutData.filter((data) => data.example);

	const reduceData = exampleWorkout.reduce((acc, curr) => {
		const category = curr["category"];

		if (!acc[category] && category !== "bicep" && category !== "tricep") {
			acc[category] = [];
		}

		if (curr.category === "tricep") {
			acc["chest"].push(curr);
		} else if (curr.category === "bicep") {
			acc["back"].push(curr);
		} else if (curr.category === "core") {
			acc["leg"].push(curr);
		} else {
			acc[category].push(curr);
		}

		return acc;
	}, {});

	const resArr = Object.entries(reduceData).reduce((acc, [key, val]) => {
		acc.push({ category: key, data: val });
		return acc;
	}, []);

	return (
		<TemplateDiv>
			<TemplateCount>
				<p>
					{props.children} <span>({resArr.length})</span>
				</p>
				<button>
					<ArrDown />
				</button>
			</TemplateCount>
			<TemplateListBox>
				{props.type === "custom" && <List custom={true} />}
				{props.type === "example" &&
					resArr.map((list) => (
						<List
							key={list.category}
							category={list.category}
							data={list.data}
							onShowModal={props.onShowModal}
							onSelectTemplateData={props.onSelectTemplateData}
						/>
					))}
			</TemplateListBox>
		</TemplateDiv>
	);
}

export default TemplateList;

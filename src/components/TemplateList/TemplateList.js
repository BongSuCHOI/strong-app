import List from "./List";

import styled from "styled-components";

import { ArrDown } from "../UI/ArrowIcon";

const TemplateDiv = styled.div`
	margin-top: 30px;
`;

const TemplateCount = styled.div`
	${({ theme }) => theme.flexBox("flex-start", "space-between")}
	p {
		margin-bottom: 20px;
		font-weight: 700;
	}
	button {
		${({ theme }) => theme.flexBox("center", "center")}
		height: 18px;
		background: ${({ theme }) => theme.sky};
		border-radius: 5px;
	}
`;

const TemplateListBox = styled.ul`
	${({ theme }) => theme.flexBox("stretch", "space-between", "row", "wrap")}
`;

const AddBtn = styled.li`
	width: calc(50% - 7.5px);
	height: 120px;
	padding: 15px;
	margin-bottom: 15px;
	border: 1px solid ${({ theme }) => theme.border};
	border-radius: 10px;
	& button {
		${({ theme }) => theme.flexBox("center", "center")};
		width: 100%;
		height: 100%;
		& p {
			line-height: 1.3;
			font-weight: 700;
			color: ${({ theme }) => theme.primary};
		}
	}
`;

function TemplateList(props) {
	const isCustom = props.type === "custom";
	const exampleWorkout = !isCustom && props.workoutData.filter((data) => data.example);

	const reduceData =
		!isCustom &&
		exampleWorkout.reduce((acc, curr) => {
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

	function openWorkoutForm() {
		props.onOpenWorkoutForm({ state: true, type: "template" });
	}

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
				{isCustom && (
					<>
						<AddBtn>
							<button onClick={openWorkoutForm}>
								<p>
									탭하여 새로운
									<br />
									템플릿 추가
								</p>
							</button>
						</AddBtn>
						{props.workoutData?.map((list) => (
							<List
								key={list.category}
								name={list.category}
								data={list.data}
								onShowModal={props.onShowModal}
								onSelectTemplateData={props.onSelectTemplateData}
							/>
						))}
					</>
				)}
				{!isCustom &&
					resArr.map((list) => (
						<List
							key={list.category}
							name={list.category}
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

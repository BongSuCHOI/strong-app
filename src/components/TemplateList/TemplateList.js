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
	let resExWorkout;
	let list;
	let tempCount;

	// 커스텀 템플릿
	if (isCustom) {
		// 전달받은 커스텀 데이터 전달
		list = listComponent(props.workoutData);
		tempCount = props.workoutData.length;
	}

	// 예제 템플릿 분류 로직
	if (!isCustom) {
		// 전체 데이터 중 예제 데이터만 필터링 후 {category: dataArr, ...}형태로 가공
		const exampleWorkout = props.workoutData
			.filter((data) => data.example)
			.reduce((acc, curr) => {
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

		// 1차 가공된 데이터 [{category: dataArr}, ...]형태로 가공
		resExWorkout = Object.entries(exampleWorkout).reduce((acc, [key, val]) => {
			acc.push({ category: key, data: val });
			return acc;
		}, []);

		// 가공끝난 예제 데이터 전달
		list = listComponent(resExWorkout);
		tempCount = resExWorkout.length;
	}

	// 커스텀/예제 템플릿 리스트 컴포넌트
	function listComponent(listData) {
		return listData.map((list) => (
			<List
				key={list.category}
				name={list.category}
				data={list.data}
				custom={isCustom}
				onShowModal={props.onShowModal}
				onSelectTemplateData={props.onSelectTemplateData}
			/>
		));
	}

	function openWorkoutForm() {
		props.onOpenWorkoutForm({ state: true, type: "template" });
	}

	return (
		<TemplateDiv>
			<TemplateCount>
				<p>
					{props.children} <span>({tempCount})</span>
				</p>
				<button>
					<ArrDown />
				</button>
			</TemplateCount>
			<TemplateListBox>
				{isCustom && (
					<AddBtn>
						<button onClick={openWorkoutForm}>
							<p>
								탭하여 새로운
								<br />
								템플릿 추가
							</p>
						</button>
					</AddBtn>
				)}
				{list}
			</TemplateListBox>
		</TemplateDiv>
	);
}

export default TemplateList;

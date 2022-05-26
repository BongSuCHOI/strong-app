import styled from "styled-components";

import { ArrRight } from "../UI/ArrowIcon";

const ListLi = styled.li`
	width: calc(50% - 7.5px);
	height: 120px;
	padding: 15px;
	margin-bottom: 15px;
	border: 1px solid ${({ theme }) => theme.border};
	border-radius: 10px;
	&:nth-last-child(-n + 2) {
		margin-bottom: 0;
	}
`;

const AddBtn = styled.button`
	${({ theme }) => theme.flexBox("center", "center")};
	width: 100%;
	height: 100%;
	& p {
		line-height: 1.3;
		font-weight: 700;
		color: ${({ theme }) => theme.primary};
	}
`;

const ListBox = styled.div`
	width: 100%;
	text-align: left;
	& span {
		${({ theme }) => theme.ellipsis2("100%", "55px", "3")};
		${({ theme }) => theme.font("sm", 300)};
		line-height: 1.3;
		color: ${({ theme }) => theme.description};
	}
`;

const SubjectBox = styled.div`
	${({ theme }) => theme.flexBox("flex-start", "space-between")};
	& p {
		margin-bottom: 5px;
		line-height: 1.3;
		${({ theme }) => theme.font("lg", 700)};
	}
	& button {
		${({ theme }) => theme.flexBox("center", "center")};
		height: 23px;
		background: ${({ theme }) => theme.sky};
		border-radius: 5px;
	}
`;

function List(props) {
	const workoutNames = props.data?.map((data) => data.name);
	const toStringWorkoutNames = workoutNames ? workoutNames.join(", ") : "";
	const categoryUpperCase = props.category?.charAt(0).toUpperCase() + props.category?.slice(1);

	function selectTempData() {
		props.onSelectTemplateData({ category: categoryUpperCase, data: props.data });
		props.onShowModal("template");
	}

	function openWorkoutForm() {
		props.onOpenWorkoutForm({ state: true, type: "template" });
	}

	return (
		<ListLi>
			{props.custom && (
				<AddBtn onClick={openWorkoutForm}>
					<p>
						탭하여 새로운
						<br />
						템플릿 추가
					</p>
				</AddBtn>
			)}
			{props.data?.length > 0 && (
				<ListBox>
					<SubjectBox>
						<p>{categoryUpperCase}</p>
						<button onClick={selectTempData}>
							<ArrRight width="23px" height="23px" />
						</button>
					</SubjectBox>
					<span>{toStringWorkoutNames}</span>
				</ListBox>
			)}
		</ListLi>
	);
}

export default List;

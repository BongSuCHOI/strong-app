import styled from "styled-components";

import { ArrRight } from "../UI/ArrowIcon";

const ListLi = styled.li`
	width: calc(50% - 7.5px);
	height: 120px;
	padding: 15px;
	margin-bottom: 15px;
	border: 1px solid #ccc;
	border-radius: 10px;
	&:nth-last-child(-n + 2) {
		margin-bottom: 0;
	}
`;
const AddBtn = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	& p {
		color: #35a7ff;
	}
`;
const ListBox = styled.div`
	width: 100%;
	text-align: left;
	& span {
		overflow: hidden;
		display: -webkit-box;
		word-wrap: break-word;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		height: 55px;
		line-height: 1.3;
		font-weight: 300;
		font-size: 14px;
		color: #999;
	}
`;
const SubjectBox = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	p {
		margin-bottom: 5px;
		line-height: 1.3;
		font-weight: 700;
		font-size: 18px;
	}
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 23px;
		background: #ecf6ff;
		border-radius: 5px;
	}
`;

function List(props) {
	const workoutNames = props.data?.map((data) => data.name);
	const toStringWorkoutNames = workoutNames ? workoutNames.join(", ") : "";
	const categoryUpperCase = props.category?.charAt(0).toUpperCase() + props.category?.slice(1);

	function selectTempData() {
		props.onSelectTemplateData({ category: categoryUpperCase, data: props.data });
		props.onShowModal();
	}

	return (
		<ListLi>
			{props.custom ? (
				<AddBtn>
					<p>
						탭하여 새로운
						<br />
						템플릿 추가
					</p>
				</AddBtn>
			) : (
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

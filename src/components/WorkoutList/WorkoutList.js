import { useContext, useState } from "react";
import styled from "styled-components";

import WorkoutContext from "../../store/workout-context";

import { ArrCheck } from "../UI/ArrowIcon";

const ListContainer = styled.div`
	overflow: hidden;
	width: 100%;
	height: ${(props) => (props.height ? props.height : "100%")};
`;

const ListBox = styled.ul`
	overflow-y: scroll;
	width: 100%;
	height: 100%;
`;

const List = styled.li`
	${({ theme }) => theme.flexBox("center")};
	width: 100%;
	padding: 5px 0;
	border-bottom: 1px solid ${({ theme }) => theme.border};
	background: ${({ theme }) => theme.white};
	& .arr-check {
		display: none;
	}
	&.clicked {
		& .name {
			color: ${({ theme }) => theme.primary};
		}
		.arr-check {
			display: block;
		}
	}
	&:first-child {
		border-top: 1px solid ${({ theme }) => theme.border};
	}
`;

const ImgBox = styled.div`
	width: 50px;
	height: 50px;
	margin-right: 15px;
	& img {
		height: 100%;
	}
`;

const InfoBox = styled.div`
	${({ theme }) => theme.flexBox("stretch", "center", "column")};
	width: calc(100% - 65px);
	min-height: 50px;
`;

const NameBox = styled.div`
	${({ theme }) => theme.flexBox("center", "space-between")};
	margin-bottom: 5px;
	& p {
		line-height: 1.3;
		font-weight: 700;
	}
`;

const CountBox = styled.div`
	${({ theme }) => theme.flexBox("center", "space-between")};
	& span {
		color: ${({ theme }) => theme.description};
		&.category {
			${({ theme }) => theme.font("sm")};
		}
	}
`;

function WorkoutList(props) {
	const workoutCtx = useContext(WorkoutContext);
	const [selectedData, setSelectedData] = useState([]);

	// 키워드 검색 및 카테고리 필터링 로직
	const filteredListData = props.listData.filter((data) => {
		const upperCaseName = data.name.toUpperCase();
		const upperCaseKeyword = props.searchKeyword?.toUpperCase();
		const category = props.category;

		if (category === undefined || category === null) {
			return true;
		}

		if (category === "" || category === "all") {
			return upperCaseName.includes(upperCaseKeyword);
		} else if (category === "bicep") {
			return (
				(data.category === "bicep" || data.category === "tricep") &&
				upperCaseName.includes(upperCaseKeyword)
			);
		} else {
			return data.category === category && upperCaseName.includes(upperCaseKeyword);
		}
	});

	function handlePropsOnClick(data, e) {
		if (props.onClick) {
			e.currentTarget.classList.toggle("clicked");
			props.onClick(data);
			setSelectedData((prevState) => prevState.concat(data));
		} else {
			return;
		}
	}

	return (
		<ListContainer height={props.height}>
			<ListBox>
				{filteredListData.map((data) => {
					// isKeeped는 추가 후 다시 추가 모달 열었을때 이미 추가한 리스트 checked유지
					const isKeeped = workoutCtx.selectWorkout.some(
						(workout) => workout.name === data.name
						);
						// isSelected는 선택 후 카테고리 및 검색 시 선택한 리스트 checked유지
					const isSelected = selectedData.some((select) => select.name === data.name);

					return (
						<List
							key={data.name}
							onClick={(e) => {
								handlePropsOnClick(data, e);
							}}
							className={isKeeped || isSelected ? "clicked" : ""}>
							<ImgBox className="img_box">
								<img src={data.image} alt={data.name} />
							</ImgBox>
							<InfoBox>
								<NameBox className="name">
									<p>{data.name}</p>
									<ArrCheck width="20px" height="20px" />
								</NameBox>
								<CountBox>
									<span className="category">{data.categoryKO}</span>
									<span className="count">
										{data.amount === 0 ? "" : data.amount}
									</span>
								</CountBox>
							</InfoBox>
						</List>
					);
				})}
			</ListBox>
		</ListContainer>
	);
}

export default WorkoutList;

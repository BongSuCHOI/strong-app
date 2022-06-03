import { useContext } from "react";
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

	function handlePropsOnClick(data, e) {
		if (props.onClick) {
			e.currentTarget.classList.toggle("clicked");
			props.onClick(data);
		} else {
			return;
		}
	}

	return (
		<ListContainer height={props.height}>
			<ListBox>
				{props.listData.map((data) => {
					const isSelected = workoutCtx.selectWorkout.some(
						(workout) => workout.name === data.name
					);

					return (
						<List
							key={data.name}
							onClick={(e) => {
								handlePropsOnClick(data, e);
							}}
							className={isSelected ? "clicked" : ""}>
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

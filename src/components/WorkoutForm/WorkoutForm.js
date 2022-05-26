import { useContext } from "react";
import styled from "styled-components";

import WorkoutContext from "../../store/workout-context";

import Button from "../UI/Button";
import { ArrClose } from "../UI/ArrowIcon";

import timerIco from "../../assets/image/ico/timer.png";

const FormBox = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: ${() => {
		const nav = document.getElementById("navigation");
		return `calc(100vh - ${nav.clientHeight}px)`;
	}};
	padding: 0 15px;
	background: ${({ theme }) => theme.white};
`;

const TitleBox = styled.div`
	display: grid;
	grid-template-columns: 20% 60% 20%;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 50px;
	margin-bottom: 30px;
	& h3 {
		justify-self: center;
	}
`;

const IconBtn = styled.button`
	${({ theme }) => theme.flexBox("center", "center")};
	justify-self: start;
	width: 45px;
	height: 34px;
	background: ${({ theme }) => theme.lightGray};
	border-radius: 5px;
	& img {
		width: 24px;
		height: 24px;
	}
`;

const TextBtn = styled.button`
	justify-self: end;
	width: 60px;
	height: 34px;
	line-height: 34px;
	text-align: center;
	font-weight: 500;
	color: ${({ theme }) => theme.white};
	background: ${(props) => {
		if (props.type === "template") {
			return ({ theme }) => theme.primary;
		} else {
			return ({ theme }) => theme.green;
		}
	}};
	border-radius: 5px;
`;

const SubjectBox = styled.div`
	width: 100%;
	margin-bottom: 56px;
	& input[type="text"] {
		width: 100%;
		${({ theme }) => theme.font("xxl", 700)};
		border: none;
		&::placeholder {
			color: ${({ theme }) => theme.placeholder};
		}
	}
	& p {
		${({ theme }) => theme.font("xxl", 700)};
	}
	& span {
		display: block;
		margin-top: 10px;
		font-weight: 500;
		color: ${({ theme }) => theme.description};
	}
`;

/** props
 * title="string"
 * type="workout ot template"
 *
 * IconBtn이랑 TextBtn은 Button 컴포넌트로 대체 가능할거같음
 */
function WorkoutForm(props) {
	const workoutCtx = useContext(WorkoutContext);
	// console.log(workoutCtx.selectWorkout);

	const isTemplate = props.type === "template";
	let timer = "0:00";

	function handleCloseForm() {
		props.onClose({ state: false, type: "" });
	}

	function showAddWorkout() {
		props.onShowModal("addWorkout");
	}

	return (
		<FormBox>
			<TitleBox>
				<IconBtn onClick={isTemplate && handleCloseForm}>
					{isTemplate && (
						<ArrClose
							width="24px"
							height="24px"
							fill={`${({ theme }) => theme.balck}`}
						/>
					)}
					{!isTemplate && <img src={timerIco} alt="timer" />}
				</IconBtn>
				<h3>
					{isTemplate && "새 템플릿"}
					{!isTemplate && timer}
				</h3>
				<TextBtn type={props.type}>
					{isTemplate && "저장"}
					{!isTemplate && "완료"}
				</TextBtn>
			</TitleBox>
			<SubjectBox>
				{isTemplate && <input type="text" placeholder="Template Name" />}
				{!isTemplate && (
					<>
						<p>더미 텍스트</p>
						<span>{timer}</span>
					</>
				)}
			</SubjectBox>
			<ul className="workout_list_box">
				{workoutCtx.selectWorkout.map((data) => (
					<li key={data.name}>{data.name}</li>
				))}
			</ul>
			<Button small={true} type="sky" onClick={showAddWorkout}>
				워크아웃 추가
			</Button>
			{!isTemplate && (
				<Button small={true} type="red" margin="30px 0 0 0">
					워크아웃 취소
				</Button>
			)}
		</FormBox>
	);
}

export default WorkoutForm;

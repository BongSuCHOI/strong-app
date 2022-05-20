import styled from "styled-components";

import WorkoutList from "../WorkoutList/WorkoutList";
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
	background: #fff;
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
		font-size: 16px;
	}
`;

const IconBtn = styled.button`
	justify-self: start;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 45px;
	height: 34px;
	background: #eaeaea;
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
	font-size: 16px;
	color: #fff;
	background: ${(props) => (props.type === "template" ? "#35a7ff" : "#67ca7a")};
	border-radius: 5px;
`;

const SubjectBox = styled.div`
	width: 100%;
	margin-bottom: 56px;
	& input[type="text"] {
		width: 100%;
		font-weight: bold;
		font-size: 27px;
		border: none;
		&::placeholder {
			color: #ccc;
		}
	}
	& p {
		font-weight: bold;
		font-size: 27px;
	}
	& span {
		display: block;
		margin-top: 10px;
		font-weight: 500;
		font-size: 16px;
		color: #666;
	}
`;

/** props
 * title="string"
 * type="workout ot template"
 *
 * IconBtn이랑 TextBtn은 Button 컴포넌트로 대체 가능할거같음
 */
function WorkoutForm(props) {
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
					{isTemplate && <ArrClose width="24px" height="24px" fill="#000" />}
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
			<ul className="workout_list_box">{!isTemplate && ""}</ul>
			<Button small={true} theme="sky" onClick={showAddWorkout}>
				워크아웃 추가
			</Button>
			{!isTemplate && (
				<Button small={true} theme="red" margin="30px 0 0 0">
					워크아웃 취소
				</Button>
			)}
		</FormBox>
	);
}

export default WorkoutForm;

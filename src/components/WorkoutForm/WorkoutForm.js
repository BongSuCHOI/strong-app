import { useContext, useState, useEffect } from "react";
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

const NameInput = styled.input.attrs({ type: "text", placeholder: "Template Name" })`
	width: 100%;
	${({ theme }) => theme.font("xxl", 700)};
	border: none;
	&::placeholder {
		color: ${({ theme }) => theme.placeholder};
		// ${(props) =>
			props.isValid ? ({ theme }) => theme.placeholder : ({ theme }) => theme.red};
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
	const [enteredName, setEnteredName] = useState("");
	const [selectedList, setSelectedList] = useState(false);
	const [formIsValid, setFormIsValid] = useState(false);

	const isTemplate = props.type === "template";
	let timer = "0:00";

	// 워크아웃 리스트 추가/삭제시 ctx 갱신되면서 유효성 재검증
	useEffect(() => {
		const listIsValid = workoutCtx.selectWorkout.length !== 0;
		setSelectedList(listIsValid);
	}, [workoutCtx.selectWorkout]);

	// 유효성 검사
	useEffect(() => {
		const checked = setTimeout(() => {
			console.log(formIsValid);
			const nameIsValid = enteredName.trim().length !== 0;
			setFormIsValid(nameIsValid && selectedList);
		}, 300);
		return () => {
			clearTimeout(checked);
		};
	}, [enteredName, selectedList]);

	function handleCloseForm() {
		props.onClose({ state: false, type: "" });
		workoutCtx.clearSelectWorkout();
	}

	function showAddWorkout() {
		props.onShowModal("addWorkout");
	}

	function handleNameChange(e) {
		setEnteredName(e.target.value);
	}

	function handleSaveTemplate() {
		if (!formIsValid) {
			alert("템플릿 이름 혹은 워크아웃이 비어있진 않은지 확인해 주세요.");
			return;
		}
		props.onCustomTemplateData({ category: enteredName, data: workoutCtx.selectWorkout });
		props.onClose({ state: false, type: "" });
		// workoutCtx.selectWorkout를 clear해야하는데 clear하면 main컴포넌트에 저장돼있던 데이터도 같이 날아가서 고쳐야함
		// enteredName 유효성 검사도 추가 해야함
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
				<TextBtn type={props.type} onClick={isTemplate && handleSaveTemplate}>
					{isTemplate && "저장"}
					{!isTemplate && "완료"}
				</TextBtn>
			</TitleBox>
			<SubjectBox>
				{isTemplate && (
					<NameInput
						value={enteredName}
						onChange={handleNameChange}
						// isValid={nameIsValidate}
					/>
				)}
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

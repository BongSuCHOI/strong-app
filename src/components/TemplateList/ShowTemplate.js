import { useContext } from "react";
import WorkoutContext from "../../store/workout-context";
import Modal from "../UI/Modal";
import WorkoutList from "../WorkoutList/WorkoutList";
import Button from "../UI/Button";

function ShowTemplate(props) {
	const workoutCtx = useContext(WorkoutContext);

	function handleTemplateDelete() {
		const result = window.confirm("해당 템플릿을 삭제하시겠습니까?");

		if (result) {
			workoutCtx.removeCustomTemplate(props.tempData);
			props.onHideModal();
		}
	}

	return (
		<Modal onHideModal={props.onHideModal} title={props.tempData.category}>
			<WorkoutList listData={props.tempData.data} />
			<Button margin={"35px 0 0 0"}>워크아웃 시작</Button>
			{props.tempData.isCustom && (
				<Button margin={"10px 0"} type="red" onClick={handleTemplateDelete}>
					템플릿 삭제
				</Button>
			)}
		</Modal>
	);
}

export default ShowTemplate;

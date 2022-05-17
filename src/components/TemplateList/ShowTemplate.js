import styled from "styled-components";

import Modal from "../UI/Modal";
import WorkoutList from "../WorkoutList/WorkoutList";
import Button from "../UI/Button";

function ShowTemplate(props) {
	return (
		<Modal onHideModal={props.onHideModal} title={props.tempData.category}>
			<WorkoutList listData={props.tempData.data} />
			<Button margin={"35px 0 10px 0"}>워크아웃 시작</Button>
		</Modal>
	);
}

export default ShowTemplate;

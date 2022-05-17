import ReactDom from "react-dom";

import styled from "styled-components";

import { ArrClose } from "./ArrowIcon";

const BackdropBox = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 20;
	background-color: rgba(0, 0, 0, 0.75);
`;

const ModalBox = styled.div`
	position: fixed;
	top: 20vh;
	left: 5%;
	width: 90%;
	background: #fff;
	padding: 1rem;
	border-radius: 14px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	z-index: 30;
`;

const TitleBox = styled.div`
	display: grid;
	grid-template-columns: 20% 60% 20%;
	align-items: center;
	justify-content: space-between;
	& .title {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-align: center;
		font-weight: bold;
		font-size: 18px;
	}
	& .sub_action {
		text-align: right;
		font-size: 16px;
		color: #35a7ff;
	}
`;

const CloseBtn = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 24px;
	background: #eaeaea;
	border-radius: 5px;
`;

function Backdrop(props) {
	return <BackdropBox onClick={props.onClick}></BackdropBox>;
}

function ModalOverlay(props) {
	return (
		<ModalBox>
			<div className="content">
				<TitleBox>
					<CloseBtn onClick={props.onHide}>
						<ArrClose fill="#000" width="24px" height="24px" />
					</CloseBtn>
					<p className="title">{props.title}</p>
					<button className="sub_action">{props.subActionName}</button>
				</TitleBox>
				<div>{props.children}</div>
			</div>
		</ModalBox>
	);
}

const portalElement = document.getElementById("modal_root");

function Modal(props) {
	return (
		<>
			{ReactDom.createPortal(<Backdrop onClick={props.onHideModal} />, portalElement)}
			{ReactDom.createPortal(
				<ModalOverlay
					onHide={props.onHideModal}
					title={props.title}
					subActionName={props.subActionName}>
					{props.children}
				</ModalOverlay>,
				portalElement
			)}
		</>
	);
}

export default Modal;

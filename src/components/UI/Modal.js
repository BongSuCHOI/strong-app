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
	${({ theme }) => theme.positionCenterY("fixed")};
	top: 50%;
	left: 15px;
	width: calc(100% - 30px);
	// max-height: 85vh;
	background: ${({ theme }) => theme.white};
	padding: 15px;
	border-radius: 15px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	z-index: 30;
`;

const TitleBox = styled.div`
	display: grid;
	grid-template-columns: 20% 60% 20%;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
	& .title {
		${({ theme }) => theme.ellipsis()}
		height: 24px;
		text-align: center;
		${({ theme }) => theme.font("lg", 700)}
	}
	& .sub_action {
		text-align: right;
		color: ${({ theme }) => theme.primary};
	}
`;

const CloseBtn = styled.button`
	${({ theme }) => theme.flexBox("center", "center")}
	width: 32px;
	height: 24px;
	background: ${({ theme }) => theme.lightGray};
	border-radius: 5px;
`;

function Backdrop(props) {
	return <BackdropBox onClick={props.onClick}></BackdropBox>;
}

function ModalOverlay(props) {
	return (
		<ModalBox>
			<div>
				<TitleBox>
					<CloseBtn onClick={props.onHide}>
						<ArrClose
							fill={`${({ theme }) => theme.black}`}
							width="24px"
							height="24px"
						/>
					</CloseBtn>
					<p className="title">{props.title}</p>
					<button className="sub_action">{props.subActionName}</button>
				</TitleBox>
				<div className="content">{props.children}</div>
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

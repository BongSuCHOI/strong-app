import ReactDom from "react-dom";

import styled from "styled-components";

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

function Backdrop(props) {
	return <BackdropBox onClick={props.onClick}></BackdropBox>;
}

function ModalOverlay(props) {
	return (
		<ModalBox>
			<div className="content">
				<div className="title">
					<button className="close" onClick={props.onHideModal}>
						<img />
					</button>
					<p>{props.title}</p>
					<button>{props.subActionName}</button>
				</div>
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

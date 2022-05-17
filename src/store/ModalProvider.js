import React, { useState } from "react";

import ModalContext from "./modal-context";

function ModalProvider(props) {
	const [modalIsShow, setModalIsShow] = useState(false);

	function showModalHandelr() {
		setModalIsShow(true);
	}

	function hideModalHandelr() {
		setModalIsShow(false);
	}

	const modalContext = {
		isVisible: modalIsShow,
		showModalHandelr: showModalHandelr,
		hideModalHandelr: hideModalHandelr,
	};

	return <ModalContext.Provider value={modalContext}>{props.children}</ModalContext.Provider>;
}

export default ModalProvider;

import React, { useState } from "react";

import ModalContext from "./modal-context";

function ModalProvider(props) {
	const [modalIsShow, setModalIsShow] = useState({ visible: false, name: "" });

	function showModalHandelr(name) {
		setModalIsShow({ visible: true, name: name });
	}

	function hideModalHandelr() {
		setModalIsShow({ visible: false, name: "" });
	}

	const modalContext = {
		isVisible: modalIsShow.visible,
		modalName: modalIsShow.name,
		showModalHandelr: showModalHandelr,
		hideModalHandelr: hideModalHandelr,
	};

	return <ModalContext.Provider value={modalContext}>{props.children}</ModalContext.Provider>;
}

export default ModalProvider;

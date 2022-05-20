import React from "react";

const ModalContext = React.createContext({
	isVisible: false,
	modalName: "",
	showModalHandelr: () => {},
	hideModalHandelr: () => {},
});

export default ModalContext;

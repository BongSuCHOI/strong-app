import React from "react";

const ModalContext = React.createContext({
	isVisible: false,
	showModalHandelr: () => {},
	hideModalHandelr: () => {},
});

export default ModalContext;

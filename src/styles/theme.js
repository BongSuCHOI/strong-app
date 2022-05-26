const calcRem = (size) => `${size / 16}rem`;

export const fontSize = {
	font: (size = calcRem(16), weight) => {
		let sizes = size;

		if (size === "xs") {
			sizes = calcRem(10);
		} else if (size === "sm") {
			sizes = calcRem(14);
		} else if (size === "lg") {
			sizes = calcRem(18);
		} else if (size === "xl") {
			sizes = calcRem(24);
		} else if (size === "xxl") {
			sizes = calcRem(27);
		} else if (size === "title") {
			sizes = calcRem(31);
		} else {
			sizes = size;
		}

		return `
            font-weight: ${weight ? weight : ""};
            font-size: ${sizes};
        `;
	},
};

export const color = {
	// common
	black: "#000",
	white: "#fff",
	placeholder: "#ccc",
	border: "#ccc",
	lightGray: "#eaeaea",
	description: "#999",

	// primary
	primary: "#35a7ff",

	// other
	sky: "#ecf6ff",
	red: "#de6769",
	lightRed: "#fdefef",
	green: "#67ca7a",
	darkNavy: "#293036",
};

export const mixins = {
	// flex
	flexBox: (align = "stretch", justify = "flex-start", direction = "row", wrap = "nowrap") => `
        display: flex;
        align-items: ${align};
        justify-content: ${justify};
        flex-direction: ${direction};
        flex-wrap: ${wrap};
    `,

	// position
	positionCenterX: (type = "absolute") => {
		if (type === "absolute" || type === "fixed")
			return `
            position: ${type};
            left: 50%;
            transform: translateX(-50%);
        `;
		return;
	},

	positionCenterY: (type = "absolute") => {
		if (type === "absolute" || type === "fixed")
			return `
            position: ${type};
            top: 50%;
            transform: translateY(-50%);
        `;
		return;
	},

	positionCenter: (type = "absolute") => {
		if (type === "absolute" || type === "fixed")
			return `
            position: ${type};
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        `;
		return;
	},

	// ellipsis
	ellipsis: (width = "100%") => `
        width: ${width};
        overflow: hidden;
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
    `,

	ellipsis2: (width = "100%", height = "100%", line = "2") => `
        width: ${width};
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: ${line};
        height: ${height};
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        white-space: normal;
        word-wrap: break-word;
    `,
};

// const deviceSizes = {
// 	mobile: "375px",
// 	tablet: "768px",
// 	pc: "1024px",
// };

// export const device = {
// 	mobile: `screen and (max-width: ${deviceSizes.mobile})`,
// 	tablet: `screen and (max-width: ${deviceSizes.tablet})`,
// 	pc: `screen and (max-width: ${deviceSizes.pc})`,
// };

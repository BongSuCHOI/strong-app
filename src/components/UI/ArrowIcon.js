import styled from "styled-components";

const ArrowSVG = styled.svg`
	width: ${(props) => (props.width ? props.width : "27px")};
	height: ${(props) => (props.height ? props.height : "27px")};
	fill: ${(props) => (props.fill ? props.fill : ({ theme }) => theme.primary)};
`;

export function ArrDown(props) {
	return (
		<ArrowSVG
			height={props.height}
			width={props.width}
			fill={props.fill}
			viewBox="0 0 24 24"
			className="arr-down">
			<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
		</ArrowSVG>
	);
}

export function ArrUp(props) {
	return (
		<ArrowSVG
			height={props.height}
			width={props.width}
			fill={props.fill}
			viewBox="0 0 24 24"
			className="arr-up">
			<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
		</ArrowSVG>
	);
}

export function ArrRight(props) {
	return (
		<ArrowSVG
			height={props.height}
			width={props.width}
			fill={props.fill}
			viewBox="0 0 24 24"
			className="arr-right">
			<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
		</ArrowSVG>
	);
}

export function ArrClose(props) {
	return (
		<ArrowSVG
			height={props.height}
			width={props.width}
			fill={props.fill}
			viewBox="0 0 24 24"
			className="arr-close">
			<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
		</ArrowSVG>
	);
}

export function ArrCheck(props) {
	return (
		<ArrowSVG
			height={props.height}
			width={props.width}
			fill={props.fill}
			viewBox="0 0 24 24"
			className="arr-check">
			<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
		</ArrowSVG>
	);
}

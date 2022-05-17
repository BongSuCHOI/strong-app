import styled from "styled-components";

const ArrowSVG = styled.svg`
	width: ${(props) => (props.width ? props.width : "27px")};
	height: ${(props) => (props.height ? props.height : "27px")};
	fill: ${(props) => (props.fill ? props.fill : "#35a7ff")};
`;

export function ArrDown(props) {
	return (
		<ArrowSVG height={props.height} width={props.width} fill={props.fill} viewBox="0 0 24 24">
			<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
		</ArrowSVG>
	);
}

export function ArrUp(props) {
	return (
		<ArrowSVG height={props.height} width={props.width} fill={props.fill} viewBox="0 0 24 24">
			<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
		</ArrowSVG>
	);
}

export function ArrRight(props) {
	return (
		<ArrowSVG height={props.height} width={props.width} fill={props.fill} viewBox="0 0 24 24">
			<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
		</ArrowSVG>
	);
}

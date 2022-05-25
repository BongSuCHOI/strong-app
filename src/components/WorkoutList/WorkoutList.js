import styled from "styled-components";

import { ArrCheck } from "../UI/ArrowIcon";

const ListContainer = styled.div`
	overflow: hidden;
	width: 100%;
	height: ${(props) => (props.height ? props.height : "100%")};
`;

const ListBox = styled.ul`
	overflow-y: scroll;
	width: 100%;
	height: 100%;
`;

const List = styled.li`
	${({ theme }) => theme.flexBox("center")};
	width: 100%;
	padding: 5px 0;
	border-bottom: 1px solid ${({ theme }) => theme.border};
	background: ${(props) => {
		if (props.check) {
			return ({ theme }) => theme.sky;
		} else {
			return ({ theme }) => theme.white;
		}
	}};
	&:first-child {
		border-top: 1px solid ${({ theme }) => theme.border};
	}
`;

const ImgBox = styled.div`
	width: 50px;
	height: 50px;
	margin-right: 15px;
	& img {
		height: 100%;
	}
`;

const InfoBox = styled.div`
	${({ theme }) => theme.flexBox("stretch", "center", "column")};
	width: calc(100% - 65px);
	min-height: 50px;
`;

const NameBox = styled.div`
	${({ theme }) => theme.flexBox("center", "space-between")};
	margin-bottom: 5px;
	line-height: 1.3;
	font-weight: 700;
	font-size: 16px;
`;

const CountBox = styled.div`
	${({ theme }) => theme.flexBox("center", "space-between")};
	& span {
		color: ${({ theme }) => theme.description};
		&.category {
			font-size: 14px;
		}
	}
`;

function WorkoutList(props) {
	function handlePropsOnClick(data) {
		if (props.onClick) {
			props.onClick(data);
		} else {
			return;
		}
	}

	return (
		<ListContainer height={props.height}>
			<ListBox>
				{props.listData.map((data) => {
					return (
						<List
							key={data.name}
							onClick={() => {
								handlePropsOnClick(data);
							}}>
							<ImgBox className="img_box">
								<img src={data.image} alt={data.name} />
							</ImgBox>
							<InfoBox>
								<NameBox className="name">
									<p>{data.name}</p>
									<ArrCheck width="20px" height="20px" />
								</NameBox>
								<CountBox>
									<span className="category">{data.categoryKO}</span>
									<span className="count">
										{data.amount === 0 ? "0" : data.amount}
									</span>
								</CountBox>
							</InfoBox>
						</List>
					);
				})}
			</ListBox>
		</ListContainer>
	);
}

export default WorkoutList;

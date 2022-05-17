import styled from "styled-components";

const ListBox = styled.ul`
	width: 100%;
	border-top: 1px solid #dcdcdc;
`;

const List = styled.li`
	display: flex;
	align-items: center;
	width: 100%;
	padding: 5px 0;
	border-bottom: 1px solid #dcdcdc;
	& img {
		height: 50px;
		margin-right: 15px;
	}
`;

const InfoBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: calc(100% - 65px);
	min-height: 50px;
	& .name {
		margin-bottom: 5px;
		line-height: 1.3;
		font-weight: 700;
		font-size: 16px;
	}
	& div {
		display: flex;
		justify-content: space-between;
		& span {
			font-size: 14px;
			color: #999;
		}
	}
`;

function WorkoutList(props) {
	return (
		<ListBox>
			{props.listData.map((data) => {
				return (
					<List key={data.name}>
						<img src={data.image} alt={data.name} />
						<InfoBox>
							<p className="name">{data.name}</p>
							<div>
								<span className="category">{data.categoryKO}</span>
								<span className="count">
									{data.amount === 0 ? "" : data.amount}
								</span>
							</div>
						</InfoBox>
					</List>
				);
			})}
		</ListBox>
	);
}

export default WorkoutList;

import styled from "styled-components";

const AddBtn = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	& p {
		color: #35a7ff;
	}
`;
const ListBtn = styled.button`
	text-align: left;
	& p {
		margin-bottom: 5px;
		font-size: 18px;
	}
	& span {
		font-weight: 300;
		font-size: 14px;
		color: #999;
	}
`;

function List(props) {
	const workoutNames = props.data?.map((data) => data.name);

	return (
		<li>
			{props.custom ? (
				<AddBtn>
					<p>
						탭하여 새로운
						<br />
						템플릿 추가
					</p>
				</AddBtn>
			) : (
				<ListBtn>
					<p>{props.category}</p>
					<span>{workoutNames}</span>
				</ListBtn>
			)}
		</li>
	);
}

export default List;

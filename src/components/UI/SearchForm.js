import styled from "styled-components";

const FormBox = styled.form`
	width: 100%;
	margin-bottom: 30px;
	& input {
		width: 100%;
		height: 35px;
		padding: 0 15px;
		font-weight: 500;
		background: ${({ theme }) => theme.lightGray};
		border: none;
		border-radius: 6px;
		&::placeholder {
			color: ${({ theme }) => theme.border};
		}
	}
`;

const CategoryBox = styled.div`
	${({ theme }) => theme.flexBox("center", "space-between")};
	overflow-y: scroll;
	width: 100%;
	height: 25px;
	margin-top: 10px;
`;

const Button = styled.button`
	flex-shrink: 0;
	width: 60px;
	height: 100%;
	margin-right: 10px;
	${({ theme }) => theme.font("sm", 500)};
	background: ${({ theme }) => theme.lightGray};
	border-radius: 6px;
	&:nth-last-child(1) {
		margin-right: 0;
	}
`;

function SearchForm(props) {
	const categoryList = {
		all: "전체",
		chest: "가슴",
		back: "등",
		leg: "다리",
		shoulder: "어깨",
		bicep: "팔",
		core: "코어",
	};

	return (
		<FormBox>
			<input
				type="text"
				placeholder="검색"
				onChange={props.onEnteredInput}
				value={props.enteredValue}
			/>
			<CategoryBox>
				{Object.entries(categoryList).map(([key, val]) => {
					return (
						<Button key={key} value={key} onClick={props.onSelectedCategory}>
							{val}
						</Button>
					);
				})}
			</CategoryBox>
		</FormBox>
	);
}

export default SearchForm;

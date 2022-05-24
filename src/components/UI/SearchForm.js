import styled from "styled-components";

const FormBox = styled.form`
	width: 100%;
	margin-bottom: 30px;
	& input {
		width: 100%;
		height: 35px;
		padding: 0 15px;
		font-weight: 500;
		font-size: 16px;
		background: #eaeaea;
		border: none;
		border-radius: 6px;
		&::placeholder {
			color: #ccc;
		}
	}
`;

const CategoryBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 25px;
	margin-top: 10px;
	& button {
		width: calc(20% - 8px);
		height: 100%;
		font-weight: 500;
		font-size: 14px;
		background: #eaeaea;
		border-radius: 6px;
	}
`;
function SearchForm() {
	return (
		<FormBox>
			<input type="text" placeholder="검색" />
			<CategoryBox>
				<button value="all">전체</button>
				<button value="chest">가슴</button>
				<button value="back">등</button>
				<button value="leg">다리</button>
				<button value="biceps">팔</button>
			</CategoryBox>
		</FormBox>
	);
}

export default SearchForm;

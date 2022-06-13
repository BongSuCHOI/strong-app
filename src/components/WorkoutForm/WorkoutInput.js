import styledComponents from "styled-components";
import Button from "../UI/Button";
import { ArrCheck } from "../UI/ArrowIcon";

const WorkoutInputBox = styledComponents.ul`
    width: 100%;
`;

const WorkoutInputList = styledComponents.li`
    width: 100%;
    margin-bottom: 30px;
`;

const SubjectBox = styledComponents.div`
    ${({ theme }) => theme.flexBox("center", "space-between")}
    width: 100%;
    margin-bottom: 20px;
    & p, button {
        color: ${({ theme }) => theme.primary};
        font-weight: 700;
    }
`;

const SetContainer = styledComponents.div`
    width: 100%;
`;

const gridCss = `
    width: 100%;
    display: grid;
    grid-template-columns: 0.85fr 3fr 1.8fr 1.8fr 1fr;
    gap: 0 10px;
    align-items: center;
    justify-items: center;
    & p{
        font-weight: 700;
    }
`;

const SetCaption = styledComponents.div`
    ${gridCss}
    margin-bottom: 15px;
`;

const SetListBox = styledComponents.ol`
    width: 100%;
    margin-bottom: 15px;
`;

const SetList = styledComponents.li`
    ${gridCss}
    & .set, .kg, .rep, .check {
        width: 100%;
        height: 24px;
        line-height: 24px;
        text-align: center;
        border-radius: 6px;
        background: ${({ theme }) => theme.lightGray};
    }
    & .prev_record {
        color: ${({ theme }) => theme.placeholder}
    }
    & input[type="number"]:focus {
        border: 2px solid #000
    }
    & input[type="checkbox"] {
        display: none;
        & + label{
            display:block;
        }
        &:checked + label{
            background: ${({ theme }) => theme.green};
            & svg {
                fill: ${({ theme }) => theme.white};
            }
        }
    }
`;

function WorkoutInput(props) {
	console.log(props.data);
	return (
		<WorkoutInputBox>
			{props.data.map((data) => (
				<WorkoutInputList key={data.name}>
					<SubjectBox>
						<p>{data.name}</p>
						<button>기능버튼</button>
					</SubjectBox>
					<SetContainer>
						<SetCaption>
							<p>세트</p>
							<p>이전</p>
							<p>kg</p>
							<p>rep</p>
							<ArrCheck width="21px" height="21px" fill="#000" />
						</SetCaption>
						<SetListBox>
							<SetList>
								<p className="set">1</p>
								<p className="prev_record">40kg x 8</p>
								<input type="number" className="kg" />
								<input type="number" className="rep" />
								<input type="checkbox" id="complete" />
								<label htmlFor="complete" className="check">
									<ArrCheck width="21px" height="21px" fill="#000" />
								</label>
							</SetList>
						</SetListBox>
						<Button type="gray" small={true}>
							+ 세트 추가
						</Button>
					</SetContainer>
				</WorkoutInputList>
			))}
		</WorkoutInputBox>
	);
}

export default WorkoutInput;

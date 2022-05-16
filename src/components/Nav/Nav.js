import styled from "styled-components";

import profile from "../../assets/image/ico/nav_profile.png";
import history from "../../assets/image/ico/nav_history.png";
import add from "../../assets/image/ico/nav_add.png";
import workout from "../../assets/image/ico/nav_workout.png";
import upgrade from "../../assets/image/ico/nav_upgrade.png";

const NavBox = styled.ul`
	position: fixed;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-top: 70px;
	box-shadow: 0px -5px 9px rgba(0, 0, 0, 0.25);
	background: #293036;

	& li {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 20%;
		height: 70px;
		text-align: center;
		opacity: 0.6;
		& img {
			display: block;
			height: 30px;
			margin: 0 auto;
		}
		& span {
			font-size: 12px;
			color: #fff;
		}
		&.on {
			opacity: 1;
		}
	}
`;

function Nav() {
	return (
		<NavBox>
			<li>
				<a>
					<img src={profile} alt="프로필" />
					<span>프로필</span>
				</a>
			</li>
			<li>
				<a>
					<img src={history} alt="이력" />
					<span>이력</span>
				</a>
			</li>
			<li className="on">
				<a>
					<img src={add} alt="워크아웃 시작" />
					<span>워크아웃 시작</span>
				</a>
			</li>
			<li>
				<a>
					<img src={workout} alt="운동" />
					<span>운동</span>
				</a>
			</li>
			<li>
				<a>
					<img src={upgrade} alt="업그레이드" />
					<span>업그레이드</span>
				</a>
			</li>
		</NavBox>
	);
}

export default Nav;

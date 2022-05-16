import WorkoutProvider from "./store/WorkoutProvider";

// components
import Layout from "./components/UI/Layout";
import Main from "./Main";
import Nav from "./components/Nav/Nav";

import styled from "styled-components";

const AppWrapper = styled.div`
	position: relative;
	max-width: 768px;
	margin: 0 auto;
`;

// render
function App() {
	return (
		<AppWrapper>
			<WorkoutProvider>
				<Layout>
					<Main />
				</Layout>
			</WorkoutProvider>
			<Nav />
		</AppWrapper>
	);
}

export default App;

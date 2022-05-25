import styled, { ThemeProvider } from "styled-components";
import { color, mixins } from "./styles/theme";

import WorkoutProvider from "./store/WorkoutProvider";
import ModalProvider from "./store/ModalProvider";

// components
import Layout from "./components/UI/Layout";
import Main from "./Main";
import Nav from "./components/Nav/Nav";

const AppWrapper = styled.div`
	position: relative;
	max-width: 768px;
	margin: 0 auto;
`;

// render
function App() {
	return (
		<ThemeProvider theme={{ ...color, ...mixins }}>
			<AppWrapper>
				<WorkoutProvider>
					<Layout>
						<ModalProvider>
							<Main />
						</ModalProvider>
					</Layout>
				</WorkoutProvider>
				<Nav />
			</AppWrapper>
		</ThemeProvider>
	);
}

export default App;

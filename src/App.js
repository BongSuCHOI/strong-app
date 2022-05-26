import styled, { ThemeProvider } from "styled-components";
import { fontSize, color, mixins } from "./styles/theme";
import GlobalStyle from "./styles/global";

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
		<ThemeProvider theme={{ ...fontSize, ...color, ...mixins }}>
			<GlobalStyle />
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

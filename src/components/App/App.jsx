import Header from "../Header/Header";
import CharacterApp from "../CharacterApp/CharacterApp";

import "./App.scss";

function App() {
	return (
		<>
			<Header />
			<main className="container">
				<CharacterApp />
			</main>
		</>
	);
}

export default App;

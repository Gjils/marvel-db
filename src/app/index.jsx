import Header from "../widgets/Header";

import CharactersList from "../pages/CharactersList";
import ComicsList from "../pages/ComicsList";
import CharacterPage from "../pages/CharacterPage";
import ComicsPage from "../pages/ComicsPage";

import "./index.scss";

export default function App() {
	return (
		<>
			<Header />
			<CharactersList />
			<ComicsList />
			<CharacterPage />
			<ComicsPage />
		</>
	);
}

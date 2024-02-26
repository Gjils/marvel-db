import Header from "../widgets/Header";

import CharactersList from "../pages/CharactersList";
import ComicsList from "../pages/ComicsList";
import CharacterPage from "../pages/CharacterPage";
import ComicsPage from "../pages/ComicsPage";

import MarvelService from "../shared/services/MarvelService";

import "./index.scss";

const marvelService = new MarvelService();

// marvelService.getCharacter("1011334").then((data) => {
// 	console.log(data);
// });

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

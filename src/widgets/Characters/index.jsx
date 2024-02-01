import Card from "./Card/Card";
import Info from "./Info/Info";
import List from "../../entities/List";

import "./style.scss";

export default function Characters() {
	const characters = [
		<Card />,
		<Card />,
		<Card />,
		<Card />,
		<Card />,
		<Card />,
		<Card />,
		<Card />,
		<Card />,
	];
	return (
		<div className="characters">
			<List elements={characters} className="characters__list" />
			<aside className="characters__side">
				<Info />
			</aside>
		</div>
	);
}

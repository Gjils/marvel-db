import ComicsItem from "./ComicsItem/ComicsItem";
import List from "../../entities/List";

import "./style.scss";

export default function Comics() {
	const comicsList = [
		<ComicsItem />,
		<ComicsItem />,
		<ComicsItem />,
		<ComicsItem />,
		<ComicsItem />,
		<ComicsItem />,
		<ComicsItem />,
		<ComicsItem />,
	];
	return <List elements={comicsList} className="comics-list" columns="4" width="225px"/>;
}

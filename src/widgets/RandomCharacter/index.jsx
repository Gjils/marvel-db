import Info from "./Info/Info";
import Action from "./Action/Action";

import "./style.scss";

export default function RandomCharacter() {
	return (
		<div className="random-character with-shadow">
			<Info />
			<Action />
		</div>
	);
}

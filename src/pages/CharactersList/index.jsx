import RandomCharacter from "../../widgets/RandomCharacter";
import Characters from "../../widgets/Characters";

import "./style.scss";

export default function CharactersList() {
	return (
		<div className="container characters-list">
			<RandomCharacter />
			<Characters />
		</div>
	);
}

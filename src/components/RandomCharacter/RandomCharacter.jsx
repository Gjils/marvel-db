import RandomCharacterInfo from "../RandomCharacterInfo/RandomCharacterInfo";
import RandomCharacterAction from "../RandomCharacterAction/RandomCharacterAction";

import "./RandomCharacter.scss";

export default function RandomCharacter() {
	return (
		<div className="random-character">
			<RandomCharacterInfo />
			<RandomCharacterAction />
		</div>
	);
}

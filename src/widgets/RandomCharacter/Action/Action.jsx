import Button from "../../../shared/components/Button";
import Title from "../../../shared/components/Title";

import "./style.scss";

export default function Action({ updateCharacter }) {
	return (
		<div className="random-character__block action-card black-bg">
			<div className="atcion-card__top">
				<Title text="Random character for today!" color="white" />
				<Title text="Do you want to get to know him better?" color="white" />
			</div>
			<div className="action-card__bottom">
				<Title
					text="Or choose another one"
					color="white"
					className="action-card__suggestion"
				/>
				<Button
					text="TRY IT"
					color="red"
					className="action-card__action"
					onClick={updateCharacter}
				/>
			</div>
		</div>
	);
}

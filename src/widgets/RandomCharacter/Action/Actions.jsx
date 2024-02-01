import Button from "../../../shared/Button";

import "./style.scss";

export default function RandomCharacterInfo() {
	return (
		<div className="random-character__block action-card">
			<div className="action-card__title">
				Random character for today!
				<br />
				Do you want to get to know him better?
			</div>
			<div className="action-card__bottom">
				<div className="action-card__suggestion">Or choose another one</div>
				<Button text="TRY IT" color="red" className="action-card__action"/>
			</div>
		</div>
	);
}

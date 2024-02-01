import Button from "../../../shared/Button";

import "./style.scss";

export default function RandomCharacterInfo() {
	return (
		<div className="random-character__block info-card">
			<img
				alt="thor"
				src="/public/thor.jpeg"
				className="info-card__image"
			></img>
			<div className="info-card__info">
				<div className="info-card__info__top">
					<div className="info-card__info__title">THOR</div>
					<p className="info-card__info__description">
						As the Norse God of thunder and lightning, Thor wields one of the
						greatest weapons ever made, the enchanted hammer Mjolnir. While
						others have described Thor as an over-muscled, oafish imbecile, he's
						quite smart and compassionate...
					</p>
				</div>
				<div className="info-card__info__links">
					<Button
						text="HOMEPAGE"
						color="red"
						className="info-card__info__links__link"
					/>
					<Button
						text="WIKI"
						color="grey"
						className="info-card__info__links__link"
					/>
				</div>
			</div>
		</div>
	);
}

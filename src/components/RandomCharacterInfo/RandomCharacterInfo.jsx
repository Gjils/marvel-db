import "./RandomCharacterInfo.scss";

export default function RandomCharacterInfo() {
	return (
		<div className="random-character__block card">
			<img alt="thor" src="/public/thor.jpeg" className="card__image"></img>
			<div className="card__info">
				<div className="card__info__title">THOR</div>
				<div className="card__info__description">
					As the Norse God of thunder and lightning, Thor wields one of the
					greatest weapons ever made, the enchanted hammer Mjolnir. While others
					have described Thor as an over-muscled, oafish imbecile, he's quite
					smart and compassionate...
				</div>
				<div className="card__info__links">
					<button className="card__info__links__link-red default-button">
						HOMEPAGE
					</button>
					<button className="card__info__links__link-gray default-button">
						WIKI
					</button>
				</div>
			</div>
		</div>
	);
}

import Button from "../../../shared/Button";
import Paragraph from "../../../shared/Paragraph";
import Title from '../../../shared/Title';

import "./style.scss";

export default function Info() {
	return (
		<div className="random-character__block info-card">
			<img
				alt="thor"
				src="/thor.jpeg"
				className="info-card__image"
			></img>
			<div className="info-card__info">
				<div className="info-card__info__top">
					<Title text="THOR"/>
					<Paragraph
						text="As the Norse God of thunder and lightning, Thor wields one of the
						greatest weapons ever made, the enchanted hammer Mjolnir. While
						others have described Thor as an over-muscled, oafish imbecile, he's
						quite smart and compassionate..."
					/>
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

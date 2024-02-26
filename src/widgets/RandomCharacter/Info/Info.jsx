import Button from "../../../shared/components/Button";
import Paragraph from "../../../shared/components/Paragraph";
import Title from "../../../shared/components/Title";
import Image from "../../../shared/components/Image";

import "./style.scss";

export default function Info({ character }) {
	const { name, description, thumbnail, homepage, wiki } = character;
	return (
		<div className="random-character__block info-card">
			<Image
				url={thumbnail}
				alt={name}
				width="200px"
				className="info-card__image"
			/>
			<div className="info-card__info">
				<div className="info-card__info__top">
					<Title text={name} />
					<Paragraph text={description} />
				</div>
				<div className="info-card__info__links">
					<Button
						text="HOMEPAGE"
						color="red"
						className="info-card__info__links__link"
						onClick={() => {
							location.assign(homepage);
						}}
					/>
					<Button
						text="WIKI"
						color="grey"
						className="info-card__info__links__link"
						onClick={() => {
							location.assign(wiki);
						}}
					/>
				</div>
			</div>
		</div>
	);
}

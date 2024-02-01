import ComicsItem from "../ComicsItem";

import Button from "../../../shared/Button";

import "./style.scss";

export default function Info() {
	const comics = [
		<ComicsItem />,
		<ComicsItem />,
		<ComicsItem />,
		<ComicsItem />,
		<ComicsItem />,
		<ComicsItem />,
		<ComicsItem />,
	];
	return (
		<div className="info with-shadow">
			<div className="info__top">
				<img
					src="../../../../public/thor.jpeg"
					alt="thor"
					className="info__image"
				/>
				<div className="info__top__flex">
					<div className="info__title">THOR</div>
					<div className="info__links">
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
			<div className="info__description">
				In Norse mythology, Loki is a god or jötunn (or both). Loki is the son
				of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By
				the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the
				world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or
				Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in
				the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki
				is referred to as the father of Váli in the Prose Edda.
			</div>
			<div className="info__comics">
				<div className="info__comics__title">Comics:</div>
				<div className="info__comics__list">{comics}</div>
			</div>
		</div>
	);
}

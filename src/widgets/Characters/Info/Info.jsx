import ComicsItem from "../ComicsItem";

import Button from "../../../shared/components/Button";
import Title from "../../../shared/components/Title";
import Paragraph from "../../../shared/components/Paragraph";
import Image from "../../../shared/components/Image";

import skeleton from "../../../assets/images/Skeleton.png";
import thor from "../../../assets/images/thor.jpeg"

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
			{/* <Title
				text="Please select a character to see information"
				size="18px"
				className="info__not-selected__title"
			/>
			<Image url={skeleton} alt="skeleton" width="100%"/> */}
			<div className="info__top">
				<Image url={thor} alt="thor" width="150px" className="info__image"/>
				<div className="info__top__flex">
					<Title text="THOR" />
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
			<Paragraph
				text="In Norse mythology, Loki is a god or jötunn (or both). Loki is the son
				of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By
				the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the
				world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or
				Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in
				the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki
				is referred to as the father of Váli in the Prose Edda."
			size="16px" className="info__description"/>
			<div className="info__comics">
				<Title text="Comics:" size="18px" className="info__comics__title"/>
				<div className="info__comics__list">{comics}</div>
			</div>
		</div>
	);
}

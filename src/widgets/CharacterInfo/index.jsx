import Title from "../../shared/Title";
import Paragraph from "../../shared/Paragraph";

import "./style.scss";

export default function CharacterInfo() {
	return (
		<div className="character-info">
			<img
				src="/thor.jpeg"
				alt="thor"
				className="character-info__image"
			/>
			<div className="character-info__right">
				<Title text="THOR" />
				<Paragraph
					text="In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda."
					size="18px"
				/>
			</div>
		</div>
	);
}

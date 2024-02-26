import Title from "../../../shared/components/Title";
import Image from "../../../shared/components/Image";

import thor from "../../../assets/images/thor.jpeg";

import "./style.scss";

export default function Card() {
	return (
		<div className="character with-shadow black-bg">
			<Image url={thor} alt="thor" width="200px"/>
			<Title text="THOR" color="white" className="character__name" />
		</div>
	);
}

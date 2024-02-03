import Title from "../../../shared/Title"

import "./style.scss"

export default function Card() {
	return (
		<div className="character with-shadow">
			<img
				src="/thor.jpeg"
				alt="thor"
				className="character__image"
			/>
			<Title text="THOR" color="white" className="character__name"/>
		</div>
	);
}

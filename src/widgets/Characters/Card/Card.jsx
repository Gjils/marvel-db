import "./style.scss"

export default function Card() {
	return (
		<div className="character with-shadow">
			<img
				src="../../../../public/thor.jpeg"
				alt="thor"
				className="character__image"
			/>
			<div className="character__name">THOR</div>
		</div>
	);
}

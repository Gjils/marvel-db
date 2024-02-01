import "./style.scss";

export default function Button({ text, color, className, width }) {
	return (
		<button
			className={`default-button ${color ? color : ""} ${
				className ? className : ""
			}`}
			style={{width: width ? width : "101px"}}
		>
			{text}
		</button>
	);
}

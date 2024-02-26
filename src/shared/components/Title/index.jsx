import "./style.scss";

export default function Title({ text, size, color, className }) {
	return (
		<div
			className={`title ${className ? className : ""} ${
				color ? color + "-text" : ""
			}`}
			style={{
				fontSize: size ? size : "",
			}}
		>
			{text}
		</div>
	);
}

export default function Image({ url, alt, width, className }) {
	return (
		<img
			src={url}
			alt={alt ? alt : ""}
			style={{
				width: width ? width : "",
			}}
			className={className}
		/>
	);
}

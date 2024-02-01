import "./index.scss";

export default function Header() {
	return (
		<header className="header">
			<div className="container">
				<div className="header__title">
					<span className="text-red">Marvel</span> information portal
				</div>
				<div className="header__status">
					<button className="option active">Characters</button> /{" "}
					<button className="option">Comics</button>
				</div>
			</div>
		</header>
	);
}

import "./index.scss";

export default function Header() {
	return (
		<header className="header">
			<div className="container">
				<div className="header__title">
					<span className="text-red">Marvel</span> information portal
				</div>
				<div className="header__status">
					<a className="option active">Characters</a> /{" "}
					<a className="option">Comics</a>
				</div>
			</div>
		</header>
	);
}

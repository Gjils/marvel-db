import "./Header.scss";

export default function Header() {
	return (
		<header className="header">
			<div className="container">
				<div className="header__title">
					<span className="text-red">Marvel</span> information portal
				</div>
				<div className="header__status">
					<span className="option__active">Characters</span> /{" "}
					<span className="">Comics</span>
				</div>
			</div>
		</header>
	);
}

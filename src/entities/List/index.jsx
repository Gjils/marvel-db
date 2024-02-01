import Button from "../../shared/Button/index";

import "./style.scss";

export default function ({ elements, className }) {
	return (
		<section className={`list ${className ? className : ""}`}>
			<div className="list__wrapper">
				{elements.map((item) => (
					<div>{item}</div>
				))}
			</div>
			<Button
				text="LOAD MORE"
				color="red"
				className="list__load-more-button"
				width="170px"
			/>
		</section>
	);
}

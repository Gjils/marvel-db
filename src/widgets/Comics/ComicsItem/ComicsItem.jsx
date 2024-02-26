import Title from "../../../shared/components/Title";
import Image from "../../../shared/components/Image";

import UW from "../../../assets/images/UW.png";

import "./style.scss";

export default function ComicsItem() {
	return (
		<div className="comics-item">
			<Image url={UW} alt="UW" className="with-shadow" width="225px"/>
			<Title text="ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB" size="14px" />
			<Title text="9.99$" color="gray" size="14px" />
		</div>
	);
}

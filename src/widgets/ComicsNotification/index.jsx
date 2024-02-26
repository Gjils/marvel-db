import Title from "../../shared/components/Title";

import "./style.scss";

export default function ComicsNotification() {
	return (
		<div className="comics-notification with-shadow">
			<Title text="New comics every week!" color="white" />
			<Title text="Stay tuned!" color="white" />
		</div>
	);
}

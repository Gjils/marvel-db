import ComicsNotification from "../../widgets/ComicsNotification";
import Comics from "../../widgets/Comics";

export default function ComicsList() {
	return (
		<div className="container">
			<ComicsNotification />
			<Comics />
		</div>
	);
}

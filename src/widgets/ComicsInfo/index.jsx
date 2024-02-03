import Title from "../../shared/Title";
import Paragraph from "../../shared/Paragraph";

import "./style.scss";

export default function ComicsInfo() {
	return (
		<div className="comics-info">
			<img src="/UW.png" alt="thor" className="comics-info__image" />
			<div className="comics-info__right">
				<Title
					text="X-Men: Days of Future Past"
				/>
				<Paragraph
					text="Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?"
					size="18px"
				/>
				<Paragraph text="144 pages" size="18px" />
				<Paragraph text="Language: en-us" size="18px" />
				<Title text="9.99$" size="24px" color="red"/>
			</div>
			<a href="" className="comics-info__back"><Title text="Back to all" size="18px"/></a>
		</div>
	);
}

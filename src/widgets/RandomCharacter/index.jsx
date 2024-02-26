import Info from "./Info/Info";
import Action from "./Action/Action";
import Loading from "../../entities/Loading";
import Error from "../../entities/Error";

import MarvelService from "../../shared/services/MarvelService";

import "./style.scss";
import { Component } from "react";

export default class RandomCharacter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			character: {},
			loaded: false,
			error: false,
		};
	}

	componentDidMount() {
		this.updateCharacter();
	}

	marvelService = new MarvelService();

	onCharacterLoad = (character) => {
		this.setState({ character, loaded: true });
	};

	onError = (e) => {
		this.setState({ loaded: true, error: true });
		throw e;
	};

	updateCharacter = async () => {
		const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);

		this.marvelService
			.getCharacter(id)
			.then(this.onCharacterLoad)
			.catch(this.onError);
	};

	render() {
		const { character, loaded, error } = this.state;
		let content;
		if (!loaded) {
			content = (
				<div className="random-character__block loading">
					<Loading className="loading__icon" />
				</div>
			);
		} else if (error) {
			content = (
				<div className="error random-character__block">
					<Error />
				</div>
			);
		} else {
			content = <Info character={character} />;
		}
		return (
			<div className="random-character with-shadow">
				{content}
				<Action updateCharacter={this.updateCharacter} />
			</div>
		);
	}
}

class MarvelService {
	_apiBase = "https://gateway.marvel.com:443/v1/public";
	_apiKey = "apikey=36a4fc3bec14011eeb4b649c2f879644";

	getResource = async (url) => {
		let res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	};

	getAllCharacters = async () => {
		const res = await this.getResource(
			`${this._apiBase}/characters?limit=9&offset=210&${this._apiKey}`,
		);
		return res.data.results.map(this._transformCharacter);
	};

	getCharacter = async (id) => {
		const res = await this.getResource(
			`${this._apiBase}/characters/${id}?${this._apiKey}`,
		);
		return this._transformCharacter(res.data.results[0]);
	};

	_transformCharacter = (character) => {
		let description = character.description
			? character.description
			: "Description not found.";

		if (description.length > 180) {
			description = description.slice(0, 178) + "...";
		}

		return {
			name: character.name,
			description: description,
			thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
			homepage: character.urls[0].url,
			wiki: character.urls[1].url,
		};
	};
}

export default MarvelService;

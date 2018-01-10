export let game_data = () => {
	return fetch('./assets/data/game_data.json')
		.then(response => response.json())
};

export let filter_sport = (data) => {
	// insert code
}

export let filter_challenges = (data) => {
	// insert code
}
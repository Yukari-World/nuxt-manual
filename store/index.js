// import axios from 'axios';

export function state() {
	return { breedList: {}, menus: {}, randomWords: [] };
}

export const mutations = {
	breedListUpdate(state, payload) {
		state.breed_list = { ...payload };
	},
	setLists(state, payload) {
		state.menus = payload;
	},
	setRandomWords(state, payload) {
		state.randomWords = payload;
	}
};

// export const actions = {
// 	async fetchItems(context) {
// 		await axios
// 			.get(process.env.baseUrl + '/json/manualList.json')
// 			.then((response) => {
// 				// console.log(response.data);
// 				context.commit('setItems', response.data);
// 			})
// 			.catch(function(error) {
// 				console.error(error);
// 			});
// 	}
// };

// import axios from 'axios';

export function state() {
	return { breedList: {}, items: {} };
}

export const mutations = {
	breedListUpdate(state, payload) {
		state.breed_list = { ...payload };
	},
	setItems(state, payload) {
		state.items = payload;
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

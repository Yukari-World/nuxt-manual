// import axios from 'axios';

export function state() {
	const nowTime = new Date();
	return {
		menus: {},
		randomWords: [],
		XorSeed: {
			x: Math.max(Math.floor(nowTime.getDate() ** ((nowTime.getMonth() + 1) / 4 + 2)), (nowTime.getMonth() + 1) * nowTime.getDate() * Math.max(nowTime.getSeconds() ** 2, 31) * Math.max(nowTime.getMinutes() ** 2, 53)),
			y: Math.max(Math.max(nowTime.getSeconds(), 5) ** Math.floor(Math.max(nowTime.getMinutes(), 10) / 10) + Math.max(nowTime.getSeconds(), 1) * Math.max(nowTime.getMinutes(), 1) * Math.floor(nowTime.getFullYear() / 10)),
			z: 0,
			w: Math.floor(Date.now() / 1000)
		}
	};
}

export const mutations = {
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

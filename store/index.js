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
			w: Math.floor(Date.now() / 1000),
		},
	};
}

export const mutations = {
	/**
	 * メニューリストセット
	 *
	 * @param {Object}   state      storeの中身
	 * @param {Object}   payload    送られてきた中身
	 */
	setLists(state, payload) {
		state.menus = payload;
	},

	/**
	 * ランダムワードリストセット
	 *
	 * @param {Object}   state      storeの中身
	 * @param {Object}   payload    送られてきた中身
	 */
	setRandomWords(state, payload) {
		state.randomWords = payload;
	},

	/**
	 * 乱数を回す
	 *
	 * @param {Object}   state  storeの中身
	 */
	randomInt32(state) {
		const t = state.XorSeed.x ^ state.XorSeed.x << 11;
		state.XorSeed.x = state.XorSeed.y;
		state.XorSeed.y = state.XorSeed.z;
		state.XorSeed.z = state.XorSeed.w;
		state.XorSeed.w = state.XorSeed.w ^ state.XorSeed.w >>> 19 ^ (t ^ t >>> 8);

		// console.log('Number: ' + this.seed.w);
		// return state.XorSeed.w;
	},
};

export const actions = {
};

export const getters = {
	/**
	 * XorShiftの乱数シードの取得
	 *
	 * @param   {Object}    state  storeの中身
	 * @returns {Object}           seed値
	 */
	getSeed(state) {
		return state.XorSeed;
	},
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

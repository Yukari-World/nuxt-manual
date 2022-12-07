/**
 * @file 共通項目を管理するstore
 */

// ----------------------------------------------------------------------------------------------------
// Import

import { GetterTree, ActionTree, MutationTree } from 'vuex';


// ----------------------------------------------------------------------------------------------------
// Interface

/**
 * ランダムワードの形式
 *
 * @interface
 */
interface RandomWord {
	/** タイトル */
	title: string,
	/** 出典 */
	original: string,
	/** 概要 */
	summary: string,
	/** タグ */
	tags: string[],
}

/**
 * XorShift 128bit Seed Number
 *
 * @interface
 */
interface XorShiftSeed128 {
	x: number,
	y: number,
	z: number,
	w: number,
}


// ----------------------------------------------------------------------------------------------------
// Type

export type RootState = ReturnType<typeof state>;


// ----------------------------------------------------------------------------------------------------
// State

export function state() {
	const nowTime = new Date();
	return {
		menus: [] as object[],
		randomWords: [] as RandomWord[],
		XorSeed: {
			x: Math.max(Math.floor(nowTime.getDate() ** ((nowTime.getMonth() + 1) / 4 + 2)), (nowTime.getMonth() + 1) * nowTime.getDate() * Math.max(nowTime.getSeconds() ** 2, 31) * Math.max(nowTime.getMinutes() ** 2, 53)),
			y: Math.max(Math.max(nowTime.getSeconds(), 5) ** Math.floor(Math.max(nowTime.getMinutes(), 10) / 10) + Math.max(nowTime.getSeconds(), 1) * Math.max(nowTime.getMinutes(), 1) * Math.floor(nowTime.getFullYear() / 10)),
			z: 0,
			w: Math.floor(Date.now() / 1000),
		} as XorShiftSeed128,
	};
}


// ----------------------------------------------------------------------------------------------------
// Getter

export const getters: GetterTree<RootState, RootState> = {
	/**
	 * XorShiftの乱数シードの取得
	 *
	 * @param   {RootState}         state   storeの中身
	 * @returns {XorShiftSeed128}           seed値
	 */
	getSeed(state: RootState): XorShiftSeed128 {
		return state.XorSeed;
	},
};


// ----------------------------------------------------------------------------------------------------
// Mutation

export const mutations: MutationTree<RootState> = {
	/**
	 * メニューリストセット
	 *
	 * @param   {RootState} state   storeの中身
	 * @param   {Object}    payload 送られてきた中身
	 * @returns {void}
	 */
	setLists(state: RootState, payload: object[]): void {
		state.menus = payload;
	},

	/**
	 * ランダムワードリストセット
	 *
	 * @param   {RootState}     state   storeの中身
	 * @param   {RandomWord[]}  payload 送られてきた中身
	 * @returns {void}
	 */
	setRandomWords(state: RootState, payload: RandomWord[]): void {
		state.randomWords = payload;
	},

	/**
	 * 乱数を回す
	 *
	 * @param   {RootState} state   storeの中身
	 * @returns {void}
	 */
	randomInt32(state: RootState): void {
		const t = state.XorSeed.x ^ state.XorSeed.x << 11;
		state.XorSeed.x = state.XorSeed.y;
		state.XorSeed.y = state.XorSeed.z;
		state.XorSeed.z = state.XorSeed.w;
		state.XorSeed.w = state.XorSeed.w ^ state.XorSeed.w >>> 19 ^ (t ^ t >>> 8);

		// console.log('Number: ' + this.seed.w);
		// return state.XorSeed.w;
	},
};


// ----------------------------------------------------------------------------------------------------
// Action

export const actions: ActionTree<RootState, RootState> = {
	/**
	 * メニューリストの取得
	 *
	 * @async
	 * @returns {Promise<void>}
	 */
	 async fetchList({ state, commit }): Promise<void> {
		if (state.menus.length === 0) {
			const xhr = await this.$axios({ url: 'json/manualList.json', method: 'GET' });
			commit('setLists', xhr.data);
		}
	},

	/**
	 * ランダムワードリストの取得
	 *
	 * @async
	 * @returns {Promise<void>}
	 */
	 async fetchRandomWords({ state, commit }): Promise<void> {
		if (state.randomWords.length === 0) {
			const xhr = await this.$axios({ url: 'json/randomWord.json', method: 'GET' });
			commit('setRandomWords', xhr.data);
		}
	},
};

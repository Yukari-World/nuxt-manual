/**
 * @file 共通項目を管理するstore
 */

// ----------------------------------------------------------------------------------------------------
// Import

import { defineStore } from 'pinia';


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

export const useIndexStore = defineStore('index', {
	state() {
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
	},

	getters: {
		/**
		 * XorShiftの乱数シードの取得
		 *
		 * @param   {any}               state   storeの中身
		 * @returns {XorShiftSeed128}           seed値
		 */
		getSeed(state: any): XorShiftSeed128 {
			return state.XorSeed;
		},
	},
});

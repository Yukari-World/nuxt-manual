/**
 * @file 共通項目を管理するstore
 */

// ----------------------------------------------------------------------------------------------------
// Import

import { defineStore } from 'pinia';
import menuData from '@/assets/json/manualList.json';
import randomWordData from '@/assets/json/randomWord.json';


// ----------------------------------------------------------------------------------------------------
// Interface

interface categoryList {
	category: string,
	baseURL: string,
	description: string,
	icon: string,
	subCategory: {
		name: string,
		url?: string,
		list: {
			title: string,
			link: string,
			summary: string,
			tags: string[],
			deprecated: boolean,
			workInProgress: boolean,
		}[],
	}[],
}

/**
 * メニュー形式
 *
 * @interface
 */
interface menuList {
	type: string,
	categoryList: categoryList[],
}

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
// Store Data

export const useIndexStore = defineStore('index', {
	// ----------------------------------------------------------------------------------------------------
	// State

	state() {
		const nowTime = new Date();
		return {
			menus: { type: 'No Data', categoryList: [] } as menuList,
			randomWords: [] as RandomWord[],
			XorSeed: {
				x: Math.max(Math.floor(nowTime.getDate() ** ((nowTime.getMonth() + 1) / 4 + 2)), (nowTime.getMonth() + 1) * nowTime.getDate() * Math.max(nowTime.getSeconds() ** 2, 31) * Math.max(nowTime.getMinutes() ** 2, 53)),
				y: Math.max(Math.max(nowTime.getSeconds(), 5) ** Math.floor(Math.max(nowTime.getMinutes(), 10) / 10) + Math.max(nowTime.getSeconds(), 1) * Math.max(nowTime.getMinutes(), 1) * Math.floor(nowTime.getFullYear() / 10)),
				z: 0,
				w: Math.floor(Date.now() / 1000),
			} as XorShiftSeed128,
		};
	},

	// ----------------------------------------------------------------------------------------------------
	// Getter

	getters: {
		getMenuList(): categoryList[] {
			return this.menus.categoryList;
		},

		/**
		 * XorShiftの乱数シードの取得
		 *
		 * @returns {XorShiftSeed128}   seed値
		 */
		getSeed(): XorShiftSeed128 {
			return this.XorSeed;
		},
	},

	// ----------------------------------------------------------------------------------------------------
	// Action

	actions: {
		/**
		 * 乱数を回す
		 *
		 * @returns {void}
		 */
		randomInt32(): void {
			const t = this.XorSeed.x ^ this.XorSeed.x << 11;
			this.XorSeed.x = this.XorSeed.y;
			this.XorSeed.y = this.XorSeed.z;
			this.XorSeed.z = this.XorSeed.w;
			this.XorSeed.w = this.XorSeed.w ^ this.XorSeed.w >>> 19 ^ (t ^ t >>> 8);
		},

		/**
		 * メニューリストの取得
		 *
		 * @async
		 * @returns {Promise<void>}
		 */
		fetchMenuList(): void {
			if (this.menus.categoryList.length === 0) {
				this.menus = menuData;
			}
		},

		/**
		 * ランダムワードリストの取得
		 *
		 * @async
		 * @returns {Promise<void>}
		 */
		fetchRandomWords(): void {
			if (this.randomWords.length === 0) {
				this.randomWords = randomWordData;
			}
		},

	},
});

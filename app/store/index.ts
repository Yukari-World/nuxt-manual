/**
 * @file 共通項目を管理するstore
 */

// ----------------------------------------------------------------------------------------------------
// Import

import { defineStore } from 'pinia';
// import YAML from 'yaml';


// ----------------------------------------------------------------------------------------------------
// Interface

interface ICategoryList {
	category: string,
	baseURL: string,
	description: string,
	icon: string,
	subCategory: Array<{
		name: string,
		url?: string,
		list: Array<{
			title: string,
			link: string,
			summary: string,
			tags: string[],
			deprecated: boolean,
			workInProgress: boolean,
		}>,
	}>,
}

/**
 * メニュー形式
 *
 * @interface
 */
interface IMenuList {
	type: string,
	categoryList: ICategoryList[],
}

/**
 * ランダムワードの形式
 *
 * @interface
 */
interface IRandomWord {
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
interface IXorShiftSeed128 {
	x: number,
	y: number,
	z: number,
	w: number,
}


// ----------------------------------------------------------------------------------------------------
// Function List

/**
 * ログ用10進数→4byte16進数出力
 *
 * @public
 * @param   {number}    val 変換する10進数
 * @returns {string}        16進数
 */
function toHex(val: number): string {
	let number = val;
	if (number < 0) {
		number = 0xFFFFFFFF + number + 1;
	}

	return '0x' + number.toString(16).toUpperCase().padStart(8, '0');
}


// ----------------------------------------------------------------------------------------------------
// Store Data

export const useIndexStore = defineStore('index', {
	// ----------------------------------------------------------------------------------------------------
	// State

	state() {
		const nowTime = new Date();
		return {
			menus: { type: 'No Data', categoryList: [] } as IMenuList,
			randomWords: [] as IRandomWord[],
			title: '' as string,
			XorSeed: {
				x: Math.max(Math.floor(nowTime.getDate() ** ((nowTime.getMonth() + 1) / 4 + 2)), (nowTime.getMonth() + 1) * nowTime.getDate() * Math.max(nowTime.getSeconds() ** 2, 31) * Math.max(nowTime.getMinutes() ** 2, 53)),
				y: Math.max(Math.max(nowTime.getSeconds(), 5) ** Math.floor(Math.max(nowTime.getMinutes(), 10) / 10) + Math.max(nowTime.getSeconds(), 1) * Math.max(nowTime.getMinutes(), 1) * Math.floor(nowTime.getFullYear() / 10)),
				z: 0,
				w: Math.floor(Date.now() / 1000),
			} as IXorShiftSeed128,
		};
	},

	// ----------------------------------------------------------------------------------------------------
	// Getter

	getters: {
		/**
		 * メニューカテゴリ一覧の取得
		 *
		 * @returns {ICategoryList[]}   メニューカテゴリリスト
		 */
		getMenuList(): ICategoryList[] {
			return this.menus.categoryList;
		},

		/**
		 * ランダムワードリストの取得
		 *
		 * @returns {IRandomWord[]} ランダムワードリスト
		 */
		getRandomWords(): IRandomWord[] {
			return this.randomWords;
		},

		/**
		 * ヘッダータイトルデータの取得
		 *
		 * @returns {string}    保管しているタイトルデータ
		 */
		getTitle(): string {
			return this.title;
		},

		/**
		 * XorShiftの乱数シードの取得
		 *
		 * @returns {IXorShiftSeed128}  seed値
		 */
		getSeed(): IXorShiftSeed128 {
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

			console.log(
				'XorShift Seed Info:\n' +
				'X: ' + toHex(this.XorSeed.x) + ' (' + this.XorSeed.x + ')\n' +
				'Y: ' + toHex(this.XorSeed.y) + ' (' + this.XorSeed.y + ')\n' +
				'Z: ' + toHex(this.XorSeed.z) + ' (' + this.XorSeed.z + ')\n' +
				'W: ' + toHex(this.XorSeed.w) + ' (' + this.XorSeed.w + ')',
			);
		},

		/**
		 * メニューリストの取得
		 *
		 * @async
		 * @returns {Promise<void>}
		 */
		async fetchMenuList(): Promise<void> {
			if (this.menus.categoryList.length === 0) {
				// const { data } = await useFetch('/yaml/manualList.yaml');
				const { data } = await useFetch<IMenuList>('/json/manualList.json', { deep: true });
				// if (data.value !== null && (typeof data.value === 'string')) {
				if (data.value && data.value !== null) {
					// this.menus = YAML.parse(data.value);
					this.menus = data.value;
				}
			}
		},

		/**
		 * ランダムワードリストの取得
		 *
		 * @async
		 * @returns {Promise<void>}
		 */
		async fetchRandomWords(): Promise<void> {
			if (this.randomWords.length === 0) {
				// const { data } = await useFetch('/yaml/randomWord.yaml');
				const { data } = await useFetch<IRandomWord[]>('/json/randomWord.json', { deep: true });
				// if (data.value !== null && (typeof data.value === 'string')) {
				if (data.value && data.value !== null) {
					// this.randomWords = YAML.parse(data.value);
					this.randomWords = data.value;
				}
			}
		},

		/**
		 * ヘッダータイトルデータのセット
		 *
		 * ストアから取得させる回りくどい手法だが、レイアウト経由では何とかならなさそうなのでこの手法で行う
		 *
		 * @param   {string}    title ヘッダータイトル情報
		 * @returns {void}
		 */
		setTitle(title: string): void {
			this.title = title;
		},
	},
});

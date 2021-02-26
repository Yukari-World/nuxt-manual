/**
 * @file JSONデータを読み取るミドルウェア
 */

// ----------------------------------------------------------------------------------------------------
// Import

import { Context, Middleware } from '@nuxt/types';


// ----------------------------------------------------------------------------------------------------

/**
 * JSONデータの取得
 * データの取得はaxiosにて行う
 *
 * @async
 * @param   {Context}       context データ
 * @returns {Promise<void>}
 */
async function middleIndex(context: Context): Promise<void> {
	// すでに store にデータが格納されている場合は再取得を行わない
	if (context.store.state.randomWords.length > 0) {
		return;
	}
	// console.log('Welcome');
	// store.dispatch('fetchItems');

	// メニュー項目の取得
	await context.$axios.$get('json/manualList.json')
		.then(function(data: any) {
			// console.log(data);
			context.store.commit('setLists', data);
		})
		.catch(function(error: any) {
			if (context.$axios.isCancel(error)) {
				console.log('Request canceled', error);
			} else {
				console.error('Axios Error: ' + error);
			}
		});

	// ランダムワードの取得
	await context.$axios.$get('json/randomWord.json')
		.then(function(data: any) {
			// console.log(data);
			context.store.commit('setRandomWords', data);
		})
		.catch(function(error: any) {
			if (context.$axios.isCancel(error)) {
				console.log('Request canceled', error);
			} else {
				console.error('Axios Error: ' + error);
			}
		});
}

const indexMiddleware: Middleware = middleIndex;

export default indexMiddleware;

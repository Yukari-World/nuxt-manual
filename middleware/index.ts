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
	await context.$axios({ url: 'json/manualList.json', method: 'GET' })
		.then(function(xhr: any) {
			// console.log(xhr.data);
			context.store.commit('setLists', xhr.data);
		})
		.catch(function(error: any) {
			if (context.$axios.isCancel(error)) {
				console.log('Request canceled', error);
			} else {
				console.error('Axios Error: ' + error);
				if (error.response) {
					// The client was given an error response (5xx, 4xx)
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				}
			}
		});

	// ランダムワードの取得
	await context.$axios({ url: 'json/randomWord.json', method: 'GET' })
		.then(function(xhr: any) {
			// console.log(xhr.data);
			context.store.commit('setRandomWords', xhr.data);
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

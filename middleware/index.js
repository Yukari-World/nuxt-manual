/**
 * @file JSONデータを読み取るミドルウェア
 */

/**
 * JSONデータの取得
 * データの取得はaxiosにて行う
 *
 * @param   {Context}       context データ
 * @returns {Promise<void>}
 */
export default async function({ $axios, store }) {
	// すでに store にデータが格納されている場合は再取得を行わない
	if (store.state.randomWords.length > 0) {
		return;
	}
	// console.log('Welcome');
	// store.dispatch('fetchItems');

	// メニュー項目の取得
	await $axios.$get('json/manualList.json')
		.then((data) => {
			// console.log(data);
			store.commit('setLists', data);
		})
		.catch(function(error) {
			if (this.$axios.isCancel(error)) {
				console.log('Request canceled', error);
			} else {
				console.error('Axios Error: ' + error);
			}
		});

	// ランダムワードの取得
	await $axios.$get('json/randomWord.json')
		.then((data) => {
			// console.log(data);
			store.commit('setRandomWords', data);
		})
		.catch(function(error) {
			if (this.$axios.isCancel(error)) {
				console.log('Request canceled', error);
			} else {
				console.error('Axios Error: ' + error);
			}
		});
}

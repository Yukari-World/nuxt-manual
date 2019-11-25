import axios from 'axios';

export default async function({ store }) {
	// // すでに store にデータが格納されている場合は再取得を行わない
	if (store.state.randomWords.length > 0) {
		return;
	}
	// // console.log('Welcome');
	// store.dispatch('fetchItems');
	await axios
		.get(process.env.baseUrl + '/json/manualList.json')
		.then((response) => {
			// console.log(response.data);
			store.commit('setLists', response.data);
		})
		.catch(function(error) {
			console.error(error);
		});

	await axios
		.get(process.env.baseUrl + '/json/randomWord.json')
		.then((response) => {
			// console.log(response.data);
			store.commit('setRandomWords', response.data);
		})
		.catch(function(error) {
			console.error(error);
		});
}

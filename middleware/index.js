import axios from 'axios';

export default async function({ store }) {
	// // すでに store にデータが格納されている場合は再取得を行わない
	if (store.state.items.length) {
		return;
	}
	// // console.log('Welcome');
	// store.dispatch('fetchItems');
	await axios
		.get(process.env.baseUrl + '/json/manualList.json')
		.then((response) => {
			// console.log(response.data);
			store.commit('setItems', response.data);
		})
		.catch(function(error) {
			console.error(error);
		});
}

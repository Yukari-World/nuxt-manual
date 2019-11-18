/**
 * @fileoverview Ajaxレスポンス取得処理に使用するAjax
 *
 * @module  nomodule/ajax-response
 * @since   1.0.0
 * @version 1.0.0
 */

/**
 * HTTPステータスコードの確認
 *
 * @param   {Response}          response    レスポンスデータ
 * @returns {Response|Error}                HTTPステータスコードが200番台ならレスポンスデータ、そうでなければエラー
 * @since   1.0.0
 * @version 1.0.0
 */
function checkStatus(response) {
	// HTTPステータスコードが200番台ではない場合
	// 類似方法にresponse.okがあるが大部分のブラウザが非対応なので非推奨
	if (response.status >= 200 && response.status < 300) {
		return response;
	} else {
		let error = new Error(response.statusText);
		error.response = response;
		throw error;
	}
}

/**
 * JSONデータの切り出し
 *
 * @param   {Response}  response    レスポンスデータ
 * @returns {JSON}                  レスポンスに格納されているJSONデータ
 * @since   1.0.0
 * @version 1.0.0
 */
function parseJSON(response) {
	// console.log(response);
	return response.json();
}

/**
 * Ajax転送処理
 *
 * @param   {string}                        sendURL 転送先URL
 * @param   {FormData}                      [form]  転送するForm Data(無くても問題ない)
 * @returns {Promise.JSON|Promise.Error}            JSONデータもしくはエラー内容
 * @since   1.0.0
 * @version 1.0.0
 */
function SendAjax(sendURL, form) {
	return new Promise(function (resolve, reject) {
		if (self.fetch) {
			fetch(sendURL, {
				method: 'POST',
				body: form
			})
				.then(checkStatus)
				.then(parseJSON)
				.then(function (json) {
					resolve(json);
				})
				.catch(function (error) {
					reject(error);
				});
		} else {
			// Fetch API未対応時の処理
			let xhr = new XMLHttpRequest();
			xhr.open('POST', sendURL, true);
			xhr.addEventListener('load', function () {
				if (xhr.readyState === 4 && xhr.status === 200) {
					resolve(xhr.response);
				}
			});

			xhr.addEventListener('error', function (error) {
				reject(error);
			});

			xhr.addEventListener('timeout', function () {
				reject('connection timeout');
			});

			xhr.timeout = 30000;
			xhr.send(form);
		}
	});
}

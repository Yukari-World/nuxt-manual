/**
 * @file Ajaxレスポンス取得処理に使用するAjax
 *
 * @module  ajax-response
 * @since   1.0.0
 * @version 1.0.2
 */

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Function

/**
 * HTTPステータスコードの確認
 *
 * @param   {Response}          response    レスポンスデータ
 * @returns {Response|Error}                HTTPステータスコードが200番台ならレスポンスデータ、そうでなければエラー
 * @since   1.0.0
 * @version 1.0.2
 */
function checkStatus(response) {
	// HTTPステータスコードが200番台ではない場合
	// 類似方法にresponse.okがあるが大部分のブラウザが非対応なので非推奨
	if (response.status >= 200 && response.status < 300) {
		return response;
	} else {
		const error = new Error(response.statusText);
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
 * @version 1.0.2
 */
function parseJSON(response) {
	// console.log(response);
	return response.json();
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Export Function

/**
 * Ajax転送処理
 *
 * @param   {string}                        sendURL             転送先URL
 * @param   {FormData}                      [form]              転送するForm Data(無くても問題ない)
 * @param   {string}                        [methodType='POST'] 転送メソッド
 * @returns {Promise.JSON|Promise.Error}                        JSONデータもしくはエラー内容
 * @since   1.0.0
 * @version 1.0.2
 */
export function SendAjax(sendURL, form, methodType) {
	return new Promise(function(resolve, reject) {
		if (self.fetch) {
			let sendStruct;
			let url;

			// POSTとGETでは転送処理が異なるのでここで処理を行う
			if (methodType === 'POST' || methodType === 'post') {
				url = sendURL;
				sendStruct = {
					method: methodType,
					body: form
				};
			} else {
				url = sendURL + '?';

				// GETのURLを作ってくれるらしい
				const params = new URLSearchParams();
				// MicrosoftEdgeは未対応のための処置(対策になっていない)
				if (form.keys !== undefined) {
					for (const a of form.keys()) {
						params.set(a, form.get(a));
					}
				}
				url += params;
				sendStruct = {
					method: methodType
				};
			}

			fetch(url, sendStruct)
				.then(checkStatus)
				.then(parseJSON)
				.then(function(json) {
					resolve(json);
				})
				.catch(function(error) {
					reject(error);
				});
		} else {
			// Fetch API未対応時の処理
			const xhr = new XMLHttpRequest();
			xhr.open(methodType, sendURL, true);
			xhr.addEventListener('load', function() {
				if (xhr.readyState === 4 && xhr.status === 200) {
					resolve(JSON.parse(xhr.response));
				}
			});

			xhr.addEventListener('error', function(error) {
				reject(error);
			});

			xhr.addEventListener('timeout', function() {
				reject(new Error('connection timeout'));
			});

			xhr.timeout = 30000;
			xhr.send(form);
		}
	});
}

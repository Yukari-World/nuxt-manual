/**
 * @file マニュアル用コモンJavaScript
 *
 * @module  manual-common
 * @since   1.0.0
 * @version 1.0.2
 */

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Initialize

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Export Constant

/**
 * requestAnimationFrameの処理方法を決める定数
 *
 * @constant
 * @since   1.0.2
 * @version 1.0.2
 */
export const animationFrame =
	window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.setTimeout;

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Export Class

/**
 * ポップアップクラス
 *
 * @type    {class}
 * @since   1.0.1
 * @version 1.0.2
 */
export class Popup {
	/**
	 * コンストラクタメソッド
	 *
	 * @constructs
	 * @param {string}  name    Name
	 */
	constructor(name) {
		/**
		 * ポップアップ表示ID
		 * @type {string}
		 */
		this.name = 'popup_' + name;

		const nodeBody = document.body;
		const div = document.createElement('div');
		div.setAttribute('id', this.name);
		div.style.position = 'absolute';

		nodeBody.insertBefore(div, document.querySelector('header'));
	}

	show(text, top, left) {
		const div = document.getElementById(this.name);
		div.style.display = 'block';
		div.style.top = top;
		div.style.left = left;
		div.textContent = text;
	}

	move(top, left) {
		const div = document.getElementById(this.name);
		div.style.top = top;
		div.style.left = left;
	}

	hide() {
		const div = document.getElementById(this.name);
		div.style.display = 'none';
		div.textContent = '';
	}
}

/**
 * IndexedDBコネクター
 *
 * @type    {class}
 * @since   1.1.0
 * @version 1.1.0
 */
export class IndexedDBConnecter {
	/**
	 * コンストラクタメソッド
	 *
	 * @constructs
	 * @param   {string}    dbName      Database Name
	 * @param   {number}    dbVersion   Database Version
	 * @returns {boolean}               接続判定
	 */
	constructor(dbName, dbVersion) {
		/**
		 * データベースの接続先テーブル
		 * @type {string}
		 */
		this.dbTable = '';

		if (!window.indexedDB) {
			console.warn('このブラウザーは安定版の IndexedDB をサポートしていません。IndexedDB の機能は利用できません。');
		} else {
			/**
			 * データベース名
			 * @type {string}
			 */
			this.dbName = dbName;

			/**
			 * データベースのバージョン
			 * @type {number}
			 */
			this.dbVersion = dbVersion;
			return true;
		}
		return false;
	}

	/**
	 * 初回接続処理
	 *
	 * @param   {Function}  func    更新処理に使う関数
	 * @returns {void}
	 */
	initializeConnection(func) {
		// データベースに接続
		const dbSourse = indexedDB.open(this.dbName, this.dbVersion);

		// データベース更新処理
		// 内容を細かく指定できるように外部関数から引っ張ってくる
		dbSourse.addEventListener('upgradeneeded', func);

		// データベースを開いた時の処理。あくまでデータベースの作成だけなので処理はない
		dbSourse.addEventListener('success', function(event) {
			const db = event.target.result;
			// 接続を解除する
			db.close();
			return true;
		});

		dbSourse.addEventListener('error', function(event) {
			// console.error('Database Connection Error: ' + event.target.errorCode);
			return event.target.errorCode;
		});
	}

	/**
	 * テーブルから値を参照
	 *
	 * @param   {object}    value   参照する値
	 * @returns {Promise}           出力結果
	 */
	getValue(value) {
		// Initialize
		// 関数内ではthisが無効なので変数に吐き出す
		const dbName = this.dbName;
		const dbTable = this.dbTable;

		return new Promise(function(resolve, reject) {
			// データベースに接続
			const dbSourse = indexedDB.open(dbName);

			dbSourse.addEventListener('success', function(event) {
				const db = event.target.result;
				const trans = db.transaction(dbTable, 'readonly');
				const store = trans.objectStore(dbTable);
				const getReq = store.get(value);

				getReq.addEventListener('success', function(event) {
					// console.log(event.target.result);
					resolve(event.target.result);
				});

				getReq.addEventListener('error', function(event) {
					// console.error('Database Error: ' + event.target.errorCode);
					reject(event.target.errorCode);
				});
			});

			dbSourse.addEventListener('error', function(event) {
				// console.error('Database Connection Error: ' + event.target.errorCode);
				reject(event.target.errorCode);
			});
		});
	}

	/**
	 * テーブルに値を挿入
	 *
	 * 同じキーが既に存在する場合、値は更新されます
	 *
	 * @param   {object}    value   参照する値
	 * @returns {Promise}           出力結果
	 */
	setValue(value) {
		// Initialize
		// 関数内ではthisが無効なので変数に吐き出す
		const dbName = this.dbName;
		const dbTable = this.dbTable;

		return new Promise(function(resolve, reject) {
			// データベースに接続
			const dbSourse = indexedDB.open(dbName);

			dbSourse.addEventListener('success', function(event) {
				const db = event.target.result;
				const trans = db.transaction(dbTable, 'readwrite');
				const store = trans.objectStore(dbTable);
				const putReq = store.put(value);

				putReq.addEventListener('success', function() {
					// console.log('put data success');
				});

				putReq.addEventListener('error', function(event) {
					// console.error('Database Error: ' + event.target.errorCode);
					reject(event.target.errorCode);
				});

				trans.addEventListener('complete', function() {
					// トランザクション完了時(putReq.onsuccessの後)に実行
					// console.log('transaction complete');
					resolve(true);
				});
			});

			dbSourse.addEventListener('error', function(event) {
				// console.error('Database Connection Error: ' + event.target.errorCode);
				reject(event.target.errorCode);
			});
		});
	}
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Export Function

/**
 * ローカルストレージの環境が利用可能か調べる関数
 *
 * {@link https://developer.mozilla.org/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API MDN}より参照
 *
 * @param   {string}    type    調べる項目
 * @returns {boolean}           利用可能かのbool
 * @since   1.0.1
 * @version 1.0.2
 */
export function storageAvailable(type) {
	const storage = window[type];
	try {
		const x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	} catch (e) {
		return (
			e instanceof DOMException &&
			// everything except Firefox
			(e.code === 22 ||
				// Firefox
				e.code === 1014 ||
				// test name field too, because code might not be present
				// everything except Firefox
				e.name === 'QuotaExceededError' ||
				// Firefox
				e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
			// acknowledge QuotaExceededError only if there's something already stored
			storage.length !== 0
		);
	}
}

/**
 * 日付の整合性を調べる
 *
 * @param   {string}    targetDate  対象の日付文字列
 * @returns {boolean}               整合性結果
 * @since   1.0.0
 * @version 1.0.2
 */
export function dateDays(targetDate) {
	// 空文字は問答無用でエラー
	if (targetDate === '') {
		return false;
	}

	// Year/Month/Day もしくは Year-Month-Day の形式のみ許容する
	if (targetDate.match(/^\d{4}\/\d{1,2}\/\d{1,2}$/)) {
		const date = new Date(targetDate);
		if (
			date.getFullYear() !== Number(targetDate.split('/')[0]) ||
			date.getMonth() !== Number(targetDate.split('/')[1] - 1) ||
			date.getDate() !== Number(targetDate.split('/')[2])
		) {
			return false;
		}
	} else if (targetDate.match(/^\d{4}-\d{1,2}-\d{1,2}$/)) {
		const date = new Date(targetDate);
		if (
			date.getFullYear() !== Number(targetDate.split('-')[0]) ||
			date.getMonth() !== Number(targetDate.split('-')[1] - 1) ||
			date.getDate() !== Number(targetDate.split('-')[2])
		) {
			return false;
		}
	}

	return true;
}

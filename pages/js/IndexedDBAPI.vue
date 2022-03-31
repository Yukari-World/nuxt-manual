<template lang="pug">
div
	v-alert(type='info', border='left', colored-border, dense, elevation='5')
		h2(v-t="'common.stub.work_in_progress.title'")
		p(v-t="'common.stub.work_in_progress.desc'")

	section
		h2 説明
		p
			| IndexedDBとはWeb Storageの一種である。Cookieと異なり長期間の保存が可能であり、Local Storageよりも更に大容量のデータを取り扱うことができる。

	section
		h2 使用方法と解説

		h3 初回接続
		p IndexedDBはSQLの様にデータベースとデータテーブルというものが存在している。データベースもデータテーブルはストレージに存在しない場合作成されるが、あらかじめ定義したうえで作成する必要がある。
		pre.language-javascript.line-numbers: code.
			// 各種定義。基本的にこの項目を何度も使いまわすのであらかじめ定義しておくと修正が楽になる
			// データベースの名前
			const dbName = 'Technical-Manual';
			// データベースのバージョン。バージョンの値が異なる場合、upgradeneededの処理を通る(初回などで存在しない場合、必ず通る)
			const dbVersion = 1;
			// データテーブル名
			const dbTable = 'tableTemp';

			// データベースに接続
			const dbSourse = indexedDB.open(dbName, dbVersion);

			// データベース更新処理
			// データテーブルの形式の更新はここでしか行えない
			dbSourse.addEventListener('upgradeneeded', function (event) {
				let db = event.target.result;

				// データテーブルの作成
				// keyPathとはインデックスキーであり、指定する値は一意である必要がある
				let objectStore = db.createObjectStore(dbTable, {keyPath : 'id'});
			});

			// データベースを開いた時の処理。あくまでデータベースの作成だけなので処理はない
			dbSourse.addEventListener('success', function (event) {
				let db = event.target.result;
				// 接続を解除する
				db.close();
			});

			// 接続に失敗した時の処理
			dbSourse.addEventListener('error', function (event) {
				console.error('Database Connection Error: ' + event.target.errorCode);
			});

		h3 データの入力
		p 入力するデータは構造体のような形式で入力する。
		pre.language-javascript.line-numbers: code.
			// データベースの名前
			const dbName = 'Technical-Manual';
			// データテーブル名
			const dbTable = 'tableTemp';
			// データの値
			let value = {'id': 22, 'name': 'Trident'};

			// データベースに接続
			const dbSourse = indexedDB.open(dbName);

			dbSourse.addEventListener('success', function (event) {
				const db = event.target.result;
				// トランザクションのモード
				const trans = db.transaction(dbTable, 'readwrite');
				// 参照するデータテーブル
				const store = trans.objectStore(dbTable);
				// 値の挿入を行う
				// 似たものにaddを使った挿入方法があるが、putと異なり重複した場合、値の更新は行われない
				const putReq = store.put(value);

				putReq.addEventListener('success', function () {
					console.log('put data success');
				});

				putReq.addEventListener('error', function (event) {
					console.error('Database Error: ' + event.target.errorCode);
				});

				trans.addEventListener('complete', function () {
					// トランザクション完了時(putReq.onsuccessの後)に実行
					console.log('transaction complete');
				});
			});

			// 接続に失敗した時の処理
			dbSourse.addEventListener('error', function (event) {
				console.error('Database Connection Error: ' + event.target.errorCode);
			});

		h3 データの取得
		p 返ってくる値は構造体と同じである。
		pre.language-javascript.line-numbers: code.
			// データベースの名前
			const dbName = 'Technical-Manual';
			// データテーブル名
			const dbTable = 'tableTemp';
			// 取得するデータの値
			const value = 22;

			// データベースに接続
			const dbSourse = indexedDB.open(dbName);

			dbSourse.addEventListener('success', function (event) {
				const db = event.target.result;
				// トランザクションのモード
				const trans = db.transaction(dbTable, 'readonly');
				// 参照するデータテーブル
				const store = trans.objectStore(dbTable);
				// 取得するデータ
				const getReq = store.get(value);

				getReq.addEventListener('success', function (event) {
					console.log(event.target.result);
				});

				getReq.addEventListener('error', function (event) {
					console.error('Database Error: ' + event.target.errorCode);
				});
			});

			// 接続に失敗した時の処理
			dbSourse.addEventListener('error', function (event) {
				console.error('Database Connection Error: ' + event.target.errorCode);
			});

		h3 データベースの削除
		pre.language-javascript.line-numbers: code.
			// データベースの名前
			const dbName = 'Technical-Manual';

			// データベースを削除
			const dbSourse = indexedDB.deleteDatabase(dbName);

			// この処理はデータベースが存在しない場合でも実行される
			dbSourse.addEventListener('success', function (event) {
				console.log('db delete success');
			});

			// 接続に失敗した時の処理
			dbSourse.addEventListener('error', function (event) {
				console.error('Database Connection Error: ' + event.target.errorCode);
			});

	section
		h2 使用上の注意
		ul
			li テーブル構造はSQLみたいなリレーショナルデータベースではなく、オブジェクト指向である。
			li
				| ブラウザによってはIndexedDBが使用できないことがある。以下のソースを使用することで使用できるかどうかを調べることができる。
				pre.language-javascript.line-numbers: code.
					if (window.indexedDB) {
						// 処理内容
					}


	section
		h2 参考リンク
		p
			a(href='https://developer.mozilla.org/ja/docs/Web/API/IndexedDB_API', target='_blank', rel='external noopener') MDN Web Docs
</template>

<script lang="ts">
import Vue from 'vue';
import { highlightAll } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

export default Vue.extend({
	data() {
		return {
			header: {
				title: 'IndexedDB',
			},
		};
	},
	mounted() {
		highlightAll();
		// plugins.fileHighlight.highlight();
		this.updateHeader();
	},
	methods: {
		updateHeader() {
			// タイトルとして使いたい情報を渡す
			this.$nuxt.$emit('update-header', this.header.title);
		},
	},
});
</script>

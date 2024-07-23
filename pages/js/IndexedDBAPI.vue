<template lang="pug">
.category--js.page--indexed-db-api
	AlertStub

	section
		h2 説明
		p
			| IndexedDBとはWeb Storageの一種である。Cookieと異なり長期間の保存が可能であり、Local Storageよりも更に大容量のデータを取り扱うことができる。

	section
		h2 使用方法と解説

		h3 初回接続
		p IndexedDBはSQLの様にデータベースとデータテーブルというものが存在している。データベースもデータテーブルはストレージに存在しない場合作成されるが、あらかじめ定義したうえで作成する必要がある。
		BlockCode.language-javascript {{ CBInit }}

		h3 データの入力
		p 入力するデータは構造体のような形式で入力する。
		BlockCode.language-javascript {{ CBInput }}

		h3 データの取得
		p 返ってくる値は構造体と同じである。
		BlockCode.language-javascript {{ CBGet }}

		h3 データベースの削除
		BlockCode.language-javascript {{ CBDelete }}

	section
		h2 使用上の注意
		ul
			li テーブル構造はSQLみたいなリレーショナルデータベースではなく、オブジェクト指向である。
			li
				| ブラウザによってはIndexedDBが使用できないことがある。以下のソースを使用することで使用できるかどうかを調べることができる。
				BlockCode.language-javascript {{ CBCheck }}


	section
		h2 参考リンク
		p
			a(href="https://developer.mozilla.org/ja/docs/Web/API/IndexedDB_API", target="_blank", rel="external noopener") MDN Web Docs
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'IndexedDB' });
const indexStore = useIndexStore();

const CBInit = `// 各種定義。基本的にこの項目を何度も使いまわすのであらかじめ定義しておくと修正が楽になる
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
});`;

const CBInput = `// データベースの名前
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
});`;

const CBGet = `// データベースの名前
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
});`;

const CBDelete = `// データベースの名前
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
});`;

const CBCheck = `if (window.indexedDB) {
	// 処理内容
}`;


// ----------------------------------------------------------------------------------------------------
// Header Data

useHead({
	title: header.title,
});


// ----------------------------------------------------------------------------------------------------
// Mounted

onMounted(function() {
	indexStore.setTitle(header.title);
});
</script>

<script lang="ts">
</script>

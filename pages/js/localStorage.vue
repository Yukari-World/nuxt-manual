<template lang="pug">
div
	v-alert(type='info', border='left', colored-border, dense, elevation='5')
		h2 書きかけのページ
		p このページの内容は書きかけです。不定期なタイミングで記述内容が追加、変更されることがあります。

	section
		h2 説明
		p
			| HTMLで一時的なデータを保存する方法は主にCookieが主流だがサイトのデータを一時的なデータを保存する方法の一つとしてローカルストレージという機能があるのでそれについて説明する。

	section
		h2 ローカルストレージに格納されているデータを確認する方法
		p ブラウザ毎に表示位置が異なるのでブラウザ毎に説明する。

		h3 Google Chrome
		p
			| ページを右クリックして検証、もしくはF12キーからDevToolsを開く。
			br
			| メニュー上部のタブからApplicationを選択するとLocal Storageの項目があるので展開して確認する。

		h3 Firefox
		p
			| ページを右クリックして要素を調査、もしくはF12キーから開発ツールを開く。
			br
			| メニュー上部のタブからストレージを選択するとローカルストレージの項目があるので展開して確認する。

		h3 Microsoft Edge
		p
			| ページを右クリックして要素を調査、もしくはF12キーから開発ツールを開く。
			br
			| メニュー上部のタブからデバッガーを選択するとローカルストレージの項目があるので展開して確認する。

	section
		h2 使用上の注意
		ul
			li ブラウザによってはストレージが使用できないことがある。以下のソースを使用することで使用できるかどうかを調べることができる。
				pre.language-javascript.line-numbers: code.
					/**
					 * ローカルストレージの環境が利用可能か調べる関数
					 *
					 * {@link https://developer.mozilla.org/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API MDN}より参照
					 *
					 * @param  {String}     type    調べる項目
					 * @return {boolean}            利用可能かのbool
					 */
					function storageAvailable(type) {
						let storage = window[type];
						try {
							let	x = '__storage_test__';
							storage.setItem(x, x);
							storage.removeItem(x);
							return true;
						} catch (e) {
							return e instanceof DOMException &amp;&amp; (
								// everything except Firefox
								e.code === 22 ||
								// Firefox
								e.code === 1014 ||
								// test name field too, because code might not be present
								// everything except Firefox
								e.name === 'QuotaExceededError' ||
								// Firefox
								e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &amp;&amp;
								// acknowledge QuotaExceededError only if there's something already stored
								storage.length !== 0;
						}
					}
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

export default {
	data() {
		return {
			header: {
				title: 'localStorage',
			},
		};
	},
	mounted() {
		Prism.highlightAll();
		// Prism.fileHighlight();
		this.updateHeader();
	},
	methods: {
		updateHeader() {
			// タイトルとして使いたい情報を渡す
			this.$nuxt.$emit('updateHeader', this.header.title);
		},
	},
};
</script>

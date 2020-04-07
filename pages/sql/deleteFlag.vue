<template lang="pug">
div
	v-alert(type='info', border='left', colored-border, dense, elevation='5')
		h2 書きかけのページ
		p このページの内容は書きかけです。不定期なタイミングで記述内容が追加、変更されることがあります。

	section
		h2 説明
		p データベースのデータを削除する時、古いデータを保持しておきたい時、役に立つのが削除フラグである。削除フラグを使用しない(データの削除)場合、そのデータを利用していたデータベースリンクが消失してしまうが、削除フラグを使用する場合、データは残っているのでリンクは保持することができる。

	section

	section
		h2 使用上の注意
		ul
			li 生成と削除を多く繰り返すデータベースの場合、この方法はあまり推奨されない。データベースに古いデータが残り続けるため、容量を圧迫するためである。
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/components/prism-sql';

export default {
	data() {
		return {
			header: {
				title: '削除フラグ',
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

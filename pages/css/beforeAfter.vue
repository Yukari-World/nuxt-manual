<template lang="pug">
.category--css.page--before-after
	section
		h2 疑似要素 :before / :afterとは
		p ある要素の前、もしくはその後に追加される疑似要素である。指定がなければ中身は常に空であり、ブラウザ上にある検証機能にも表示されない。

	section
		h2 使用方法と解説
		h3 SCSS
		BlockCode.language-scss {{ CB1 }}

		h3 CSS
		BlockCode.language-css {{ CB2 }}

		p
			| 出力結果はメニューリスト通りなので省略する。
			br
			| リストタグ
			TextTag li
			| に対して利用する例。リストの前に追加することでツリー構造のような見た目を作ることができる。擬似要素
			TextToken(type="css").selector :last-child
			| を使うことでツリー構造の終点を別のものに置き換えている。

		p afterの方は説明例が思いつかなかったため現在は省略。

	section
		h2 使用上の注意
		ul
			li
				| before / afterの要素を利用する場合、
				TextToken(type="css").property content
				| 要素を必ず必要とする。空の文字列を用意するだけでも問題はない。
			li 疑似要素で追加された文字列はマウスドラッグによって対象にすることができない。またコピーの対象にもできない。

	section
		h2 参考リンク
		p
			a(href="https://developer.mozilla.org/ja/docs/Web/CSS/::before", target="_blank", rel="external noopener") MDN Web Docs / before
			br
			a(href="https://developer.mozilla.org/ja/docs/Web/CSS/::after", target="_blank", rel="external noopener") MDN Web Docs / after
			br
			a(href="https://developer.mozilla.org/ja/docs/Web/CSS/content", target="_blank", rel="external noopener") MDN Web Docs / content
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: '疑似要素 :before / :after' });
const indexStore = useIndexStore();

const CB1 = `ul {
	margin-left: 1em;
	padding-right: 2px;
	text-indent: -1em;

	li {
		&amp;::before {
			content: "├";
			animation: flashString 10s linear infinite;
		}

		&amp;:last-child {
			&amp;::before {
				content: "└";
				animation: flashString 10s linear infinite;
			}
		}
	}
}`;

const CB2 = `ul {
	margin-left: 1em;
	padding-right: 2px;
	text-indent: -1em;
}

ul li::before {
	content: "├";
	animation: flashString 10s linear infinite;
}

ul li:last-child::before {
	content: "└";
	animation: flashString 10s linear infinite;
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

<template lang="pug">
.category-css.page-before-after
	section
		h2 疑似要素 :before / :afterとは
		p ある要素の前、もしくはその後に追加される疑似要素である。指定がなければ中身は常に空であり、ブラウザ上にある検証機能にも表示されない。

	section
		h2 使用方法と解説
		h3 SCSS
		pre.language-scss.line-numbers: code.
			ul {
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
			}

		h3 CSS
		pre.language-css.line-numbers: code.
			ul {
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
			}

		p
			| 出力結果はメニューリスト通りなので省略する。
			br
			| リストタグ
			code.language-html
				span.token.punctuation &lt;
				span.token.tag li
				span.token.punctuation &gt;
			| に対して利用する例。リストの前に追加することでツリー構造のような見た目を作ることができる。擬似要素
			code.language-css: span.token.selector :last-child
			| を使うことでツリー構造の終点を別のものに置き換えている。

		p afterの方は説明例が思いつかなかったため現在は省略。

	section
		h2 使用上の注意
		ul
			li
				| before / afterの要素を利用する場合、
				code.language-css: span.token.property content
				| 要素を必ず必要とする。空の文字列を用意するだけでも問題はない。
			li 疑似要素で追加された文字列はマウスドラッグによって対象にすることができない。またコピーの対象にもできない。

	section
		h2 参考リンク
		p
			a(href='https://developer.mozilla.org/ja/docs/Web/CSS/::before', target='_blank', rel='external noopener') MDN Web Docs / before
			br
			a(href='https://developer.mozilla.org/ja/docs/Web/CSS/::after', target='_blank', rel='external noopener') MDN Web Docs / after
			br
			a(href='https://developer.mozilla.org/ja/docs/Web/CSS/content', target='_blank', rel='external noopener') MDN Web Docs / content
</template>

<script setup lang="ts">
import { highlightAll } from 'prismjs';
import { useIndexStore } from '@/store/index';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: '疑似要素 :before / :after' });
const indexStore = useIndexStore();


// ----------------------------------------------------------------------------------------------------
// Header Data

useHead({
	title: header.title,
});


// ----------------------------------------------------------------------------------------------------
// Mounted

onMounted(function() {
	highlightAll();
	indexStore.setTitle(header.title);
});
</script>

<script lang="ts">
</script>

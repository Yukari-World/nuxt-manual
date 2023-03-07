<template lang="pug">
.category-php.page-file-process-lock
	section
		h2 説明
		p データベースなどでプロセスが複数起動しては困る処理が存在する場合、使える処理である。なお、この方法はファイル専有ロックとは異なるため、用途によってはこちらの方法より好ましい場合があるので注意。

	section
		h2  専有ロックとの違い
		p
			| 専有ロックは複数のユーザーがそのスクリプトにアクセスし、他の人がそのファイルを読み書きしている場合、読み書きを一時的に待機してもらい、ロックが解除した時にアクセスを続行する処理である。
			br
			| 一方この方法は他の人がそのスクリプトにアクセスし、他の人がそのファイルを読み書きしている場合、処理を行わずにそのスクリプトの処理を終了させる処理である。

	section
		h2 使用方法と解説
		p 少し長いが一連の処理。ロックファイルがdefineで指定してあるのは使用するファイル名が共通であり、ファイル名変更などで起こるコーディング時の修正やミスを減らすための工夫である。

		pre.language-php.line-numbers: code.
			/**
			 * ロックファイル
			 * @var string
			 */
			define('ENCODE_LOCK', 'encoding.lock');

			// ロックされていたら終了する
			if (file_exists(ENCODE_LOCK)) {
				exit(0);
			}

			// ロックファイルを作成(ファイルを使用した疑似プロセスロック)
			$fp = fopen(ENCODE_LOCK, 'a+');
			fclose($fp);

			～～～～～～
			  処理内容
			～～～～～～

			// ロックファイルの削除
			unlink(ENCODE_LOCK);

	section
		h2 使用上の注意
		ul
			li
				| 処理が異常終了しロックファイルが残留してしまった場合、このスクリプトはアクセスできなくなるのでロック処理の例外処理が必要である。
				br
				| 好ましい手段はファイルのタイムスタンプを元に一定の期間が経過した場合、ロックファイルを削除する方法である。
			li ロックされており強制終了する場合、処理の都合上ユーザー側は何が起きたのか理解できないので何らかのメッセージを表示させることが好ましい。
</template>

<script setup lang="ts">
import { highlightAll } from 'prismjs';
import { useIndexStore } from '@/store/index';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'ファイルを利用した二重起動防止' });
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

<template lang='pug'>
.category--html.page--input
	AlertStub

	section
		h2 説明
		p
			code.language-html
				span.token.punctuation &lt;
				span.token.tag input
				span.token.punctuation &gt;
			| 要素は
			code.language-html
				span.token.punctuation &lt;
				span.token.tag form
				span.token.punctuation &gt;
			| 要素と一緒に使われることの多いホームページを訪れたユーザーがデータを入力する要素の一つである(ユーザーが入力するその他の要素は
			code.language-html
				span.token.punctuation &lt;
				span.token.tag textarea
				span.token.punctuation &gt;
			| 、
			code.language-html
				span.token.punctuation &lt;
				span.token.tag button
				span.token.punctuation &gt;
			| 等がある)。
			code.language-html
				span.token.punctuation &lt;
				span.token.tag input
				span.token.punctuation &gt;
			| は非常に種類が多く、利用頻度が高いがその全てを把握するのが難しいのでこのページで一通り纏めておく。

	section
		h2 inputの種類

		dl
			dt: h3#input-button button
			dd
				p 機能を持たないボタンを作成する。
				BlockCode.language-html: pre.
					&lt;input type="button" value="ボタン"&gt;

				fieldset
					input(type='button' value='ボタン')

			dt: h3#input-checkbox checkbox
			dd
				p チェックボックスを作成する。ラジオボタンと異なり複数選択することができる。
				BlockCode.language-html: pre.
					&lt;label&gt;&lt;input type="checkbox" value="1"&gt;内容1&lt;/label&gt;
					&lt;label&gt;&lt;input type="checkbox" value="2"&gt;内容2&lt;/label&gt;
					&lt;label&gt;&lt;input type="checkbox" value="3"&gt;内容3&lt;/label&gt;

				fieldset
					label
						input(type='checkbox' value='1')
						p 内容1
					label
						input(type='checkbox' value='2')
						p 内容2
					label
						input(type='checkbox' value='3')
						p 内容3

			dt: h3#input-color color
			dd
				BlockCode.language-html: pre.
					&lt;input type="color" value="#FFFFFF"&gt;

				fieldset
					input(type='color' value='#FFFFFF')

			dt: h3#input-date date
			dd
				p 日付入力フォームを作成する。ブラウザによってはカレンダーが表示されたりする。
				BlockCode.language-html: pre.
					&lt;input type="date"&gt;

				fieldset
					input(type='date')

			dt: h3#input-datetime-local datetime-local
			dd
				BlockCode.language-html: pre.
					&lt;input type="datetime-local"&gt;

				fieldset
					input(type='datetime-local')

			dt: h3#input-email email
			dd
				p メールアドレス入力フォームを作成する。ブラウザ毎にメールアドレスの検証機能が異なる。
				BlockCode.language-html: pre.
					&lt;input type="email"&gt;

				fieldset
					input(type='email')

			dt: h3#input-file file
			dd
				BlockCode.language-html: pre.
					&lt;input type="file"&gt;

				fieldset
					input(type='file')

			dt: h3#input-hidden hidden
			dd
				BlockCode.language-html: pre.
					&lt;input type="hidden"&gt;

				fieldset
					input(type='hidden')

			dt: h3#input-image image
			dd
				BlockCode.language-html: pre.
					&lt;input type="image"&gt;

				fieldset
					input(type='image')

			dt: h3#input-month month
			dd
				BlockCode.language-html: pre.
					&lt;input type="month"&gt;

				fieldset
					input(type='month')

			dt: h3#input-number number
			dd
				BlockCode.language-html: pre.
					&lt;input type="number"&gt;

				fieldset
					input(type='number')

			dt: h3#input-password password
			dd
				p パスワード入力フォームを作成する。パスワード入力時、文字は全て●で表示される。また、非SSLページ(暗号化されていないページ)ではブラウザによっては警告が表示される。
				BlockCode.language-html: pre.
					&lt;input type="password"&gt;

				fieldset
					input(type='password')

			dt: h3#input-radio radio
			dd
				p 複数の選択肢から1つを選ぶラジオボタンを作成する。
				BlockCode.language-html: pre.
					&lt;label&gt;&lt;input type="radio" value="1"&gt;内容1&lt;/label&gt;

				fieldset
					label
						input(type='radio' value='1')
						| 内容1

				p ラジオボタンはname属性に同じ名前を指定することで同一グループであると認識する。
				BlockCode.language-html: pre.
					&lt;label&gt;&lt;input type="radio" name="bread" value="1"&gt;内容1&lt;/label&gt;
					&lt;label&gt;&lt;input type="radio" name="bread" value="2"&gt;内容1&lt;/label&gt;
					&lt;label&gt;&lt;input type="radio" name="bread" value="3"&gt;内容1&lt;/label&gt;

				fieldset
					label
						input(type='radio' name='bread' value='1')
						p 内容1
					label
						input(type='radio' name='bread' value='2')
						p 内容2
					label
						input(type='radio' name='bread' value='3')
						p 内容3

			dt: h3#input-range range
			dd
				p 数値の正確さが重要ではない数値の入力要素を作成する。
				BlockCode.language-html: pre.
					&lt;input type="range"&gt;

				fieldset
					input(type='range')

			dt: h3#input-reset reset
			dd
				p 入力されている項目を初期化する
				BlockCode.language-html: pre.
					&lt;input type="reset"&gt;

				fieldset
					input(type='reset')

			dt: h3#input-search search
			dd
				BlockCode.language-html: pre.
					&lt;input type="search"&gt;

				fieldset
					input(type='search')

			dt: h3#input-submit submit
			dd
				p フォームの入力を完了し送信するボタンを作成する。
				BlockCode.language-html: pre.
					&lt;input type="submit"&gt;

				fieldset
					input(type='submit')

			dt: h3#input-tel tel
			dd
				p 電話番号を入力フォームを作成する。
				BlockCode.language-html: pre.
					&lt;input type="tel"&gt;

				fieldset
					input(type='tel')

			dt: h3#input-text text
			dd
				BlockCode.language-html: pre.
					&lt;input type="text"&gt;

				fieldset
					input(type='text')

			dt: h3#input-time time
			dd
				BlockCode.language-html: pre.
					&lt;input type="time"&gt;

				fieldset
					input(type='time')

			dt: h3#input-url url
			dd
				BlockCode.language-html: pre.
					&lt;input type="url"&gt;

				fieldset
					input(type='url')

			dt: h3#input-week week
			dd
				BlockCode.language-html: pre.
					&lt;input type="week"&gt;

				fieldset
					input(type='week')

	section
		h2 使用可能な属性

		h3 autofocus
		p
			| そのページに移行した時、自動的にそのフォームに入力カーソルが置かれる。
			code.language-html
				span.token.attr-name autofocus
			| には内容が存在しないため
			code.language-html
				span.token.attr-name autofocus
			| のみでも問題はない。尚サンプルは性質上ページこの位置まで勝手に移動してしまうので用意していない。
		BlockCode.language-html: pre.
			&lt;input type="text" name="your-name" autofocus="autofocus"&gt;

		h3 formaction
		p
			| フォームに入力された情報を処理するプログラムのURIを指定する。
			code.language-html
				span.token.punctuation &lt;
				span.token.tag form
				span.token.punctuation &gt;
			| 要素に指定した
			code.language-html
				span.token.attr-name action
			| 属性よりも優先される。この属性はimageもしくはsubmitにのみ指定できる。
		BlockCode.language-html: pre.
			&lt;input type="submit" formaction="sample.php"&gt;

		h3 list

		h3 name
		p
			| フォーム項目の名前。ブラウザ上には表示されないため
			code.language-html
				span.token.punctuation &lt;
				span.token.tag label
				span.token.punctuation &gt;
			| 等を使用してどの様な項目なのか記入する必要がある。JavaScriptのパーツとして使用する場合を除きほぼ必須項目である。
		BlockCode.language-html: pre.
			&lt;input type="text" name="your-name"&gt;

		fieldset
			input(type='text', name='your-name')

		h3 required
		p
			| そのフォームの入力を必須にする。
			code.language-html
				span.token.attr-name required
			| には内容が存在しないため
			code.language-html
				span.token.attr-name required
			| のみでも問題はない。
			| checkboxに使用した場合、必ずその項目をチェックをつけなくてはならない。

		h3 value
		p checkbox、hidden、submit、radioとそれ以外では扱いが異なる。
		ul
			li
				| checkboxとradioの場合
				br
				| 選択した時に送られる値。
			li
				| hiddenの場合
				br
				| フォームに送られる値。JavaScript等使わない限り編集することができない。
			li
				| submitの場合
				br
				| ボタンに表示される文字列。フォーム送信時にその文字列も一緒に送られる。
				BlockCode.language-html: pre.
					&lt;input type="submit" name="submit" value="送信確認"&gt;

				fieldset
					input(type='submit', name='submit', value='送信確認')
			li
				| それ以外の項目の場合
				br
				| フォーム項目の初期値。
				BlockCode.language-html: pre.
					&lt;input type="text" name="your-name" value="山田太郎"&gt;

				fieldset
					input(type='text', name='your-name', value='山田太郎')

	section
		h2 使用上の注意
		ul
			li
				code.language-html
					span.token.punctuation &lt;
					span.token.tag form
					span.token.punctuation &gt;
				| 要素上に存在しない入力フォームは基本的に送信されない。formから独立した位置に入力フォームを設置する場合は
				code.language-html
					span.token.attr-name form
				| 属性を忘れないようにすること。但し大抵これを使用する場合入力フォームの位置が通常より遠ざかる位置にあることが多いためフォームの形としては不適切になりやすいことには注意すること。またHTML5の要素故に旧バージョンのブラウザでは対応していないことが多いので注意が必要。

	section
		h2 参考リンク
		p
			a(href='https://developer.mozilla.org/ja/docs/Web/HTML/Element/Input', target='_blank', rel='external noopener') MDN Web Docs
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'input要素' });
const indexStore = useIndexStore();


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

<style lang="scss">
.category--html {
	&.page--input {
		label {
			display: inline-flex;
			align-items: center;
		}

		fieldset {
			padding: 15px;
			color: #000000;
			background-color: #9999CC;
			border: 2px solid #FFFFFF;

			input {
				background-color: #FFFFFF;
				border-radius: 3px;

				&[type="button"], &[type="reset"], &[type="submit"] {
					padding: 2px;
				}

				&[type="checkbox"] {
					display: inline-flex;
					align-items: center;

					+ p {
						margin: 0 1em 0 0;
					}
				}

				&[type="radio"] {
					+ p {
						margin: 0 1em 0 0;
					}
				}
			}

			+ p {
				margin-top: 0.5rem;
			}
		}
	}
}
</style>

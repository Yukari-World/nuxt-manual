<template lang="pug">
.category--html.page--input
	AlertStub

	section
		h2 説明
		p
			TextTag input
			| 要素は
			TextTag from
			| 要素と一緒に使われることの多いホームページを訪れたユーザーがデータを入力する要素の一つである(ユーザーが入力するその他の要素は
			TextTag textarea
			| 、
			TextTag button
			| 等がある)。
			TextTag input
			| は非常に種類が多く、利用頻度が高いがその全てを把握するのが難しいのでこのページで一通り纏めておく。

	section
		h2 inputの種類

		dl
			dt: h3#input-button button
			dd
				p 機能を持たないボタンを作成する。
				BlockCode.language-html {{ CB01 }}
				fieldset
					input(type="button" value="ボタン")

			dt: h3#input-checkbox checkbox
			dd
				p チェックボックスを作成する。ラジオボタンと異なり複数選択することができる。
				BlockCode.language-html {{ CB02 }}
				fieldset
					label
						input(type="checkbox" value="1")
						p 内容1
					label
						input(type="checkbox" value="2")
						p 内容2
					label
						input(type="checkbox" value="3")
						p 内容3

			dt: h3#input-color color
			dd
				BlockCode.language-html {{ CB03 }}
				fieldset
					input(type="color" value="#FFFFFF")

			dt: h3#input-date date
			dd
				p 日付入力フォームを作成する。ブラウザによってはカレンダーが表示されたりする。
				BlockCode.language-html {{ CB04 }}
				fieldset
					input(type="date")

			dt: h3#input-datetime-local datetime-local
			dd
				BlockCode.language-html {{ CB05 }}
				fieldset
					input(type="datetime-local")

			dt: h3#input-email email
			dd
				p メールアドレス入力フォームを作成する。ブラウザ毎にメールアドレスの検証機能が異なる。
				BlockCode.language-html {{ CB06 }}
				fieldset
					input(type="email")

			dt: h3#input-file file
			dd
				BlockCode.language-html {{ CB07 }}
				fieldset
					input(type="file")

			dt: h3#input-hidden hidden
			dd
				BlockCode.language-html {{ CB08 }}
				fieldset
					input(type="hidden")

			dt: h3#input-image image
			dd
				BlockCode.language-html {{ CB09 }}
				fieldset
					input(type="image")

			dt: h3#input-month month
			dd
				BlockCode.language-html {{ CB10 }}
				fieldset
					input(type="month")

			dt: h3#input-number number
			dd
				BlockCode.language-html {{ CB11 }}
				fieldset
					input(type="number")

			dt: h3#input-password password
			dd
				p パスワード入力フォームを作成する。パスワード入力時、文字は全て●で表示される。また、非SSLページ(暗号化されていないページ)ではブラウザによっては警告が表示される。
				BlockCode.language-html {{ CB12 }}
				fieldset
					input(type="password")

			dt: h3#input-radio radio
			dd
				p 複数の選択肢から1つを選ぶラジオボタンを作成する。
				BlockCode.language-html {{ CB13 }}
				fieldset
					label
						input(type="radio" value="1")
						| 内容1

				p ラジオボタンはname属性に同じ名前を指定することで同一グループであると認識する。
				BlockCode.language-html {{ CB14 }}
				fieldset
					label
						input(type="radio" name="bread" value="1")
						p 内容1
					label
						input(type="radio" name="bread" value="2")
						p 内容2
					label
						input(type="radio" name="bread" value="3")
						p 内容3

			dt: h3#input-range range
			dd
				p 数値の正確さが重要ではない数値の入力要素を作成する。
				BlockCode.language-html {{ CB15 }}
				fieldset
					input(type="range")

			dt: h3#input-reset reset
			dd
				p 入力されている項目を初期化する
				BlockCode.language-html {{ CB16 }}
				fieldset
					input(type="reset")

			dt: h3#input-search search
			dd
				BlockCode.language-html {{ CB17 }}
				fieldset
					input(type="search")

			dt: h3#input-submit submit
			dd
				p フォームの入力を完了し送信するボタンを作成する。
				BlockCode.language-html {{ CB18 }}
				fieldset
					input(type="submit")

			dt: h3#input-tel tel
			dd
				p 電話番号を入力フォームを作成する。
				BlockCode.language-html {{ CB19 }}
				fieldset
					input(type="tel")

			dt: h3#input-text text
			dd
				BlockCode.language-html {{ CB20 }}
				fieldset
					input(type="text")

			dt: h3#input-time time
			dd
				BlockCode.language-html {{ CB21 }}
				fieldset
					input(type="time")

			dt: h3#input-url url
			dd
				BlockCode.language-html {{ CB22 }}
				fieldset
					input(type="url")

			dt: h3#input-week week
			dd
				BlockCode.language-html {{ CB23 }}
				fieldset
					input(type="week")

	section
		h2 使用可能な属性

		h3 autofocus
		p
			| そのページに移行した時、自動的にそのフォームに入力カーソルが置かれる。
			TextToken(type="html").token.attr-name autofocus
			| には内容が存在しないため
			TextToken(type="html").token.attr-name autofocus
			| のみでも問題はない。尚サンプルは性質上ページこの位置まで勝手に移動してしまうので用意していない。
		BlockCode.language-html {{ CB24 }}

		h3 formaction
		p
			| フォームに入力された情報を処理するプログラムのURIを指定する。
			TextTag form
			| 要素に指定した
			TextToken(type="html").token.attr-name action
			| 属性よりも優先される。この属性はimageもしくはsubmitにのみ指定できる。
		BlockCode.language-html {{ CB25 }}

		h3 list

		h3 name
		p
			| フォーム項目の名前。ブラウザ上には表示されないため
			TextTag label
			| 等を使用してどの様な項目なのか記入する必要がある。JavaScriptのパーツとして使用する場合を除きほぼ必須項目である。
		BlockCode.language-html {{ CB26 }}

		fieldset
			input(type="text", name="your-name")

		h3 required
		p
			| そのフォームの入力を必須にする。
			TextToken(type="html").token.attr-name required
			| には内容が存在しないため
			TextToken(type="html").token.attr-name required
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
				BlockCode.language-html {{ CB27 }}

				fieldset
					input(type="submit", name="submit", value="送信確認")
			li
				| それ以外の項目の場合
				br
				| フォーム項目の初期値。
				BlockCode.language-html {{ CB28 }}

				fieldset
					input(type="text", name="your-name", value="山田太郎")

	section
		h2 使用上の注意
		ul
			li
				TextTag form
				| 要素上に存在しない入力フォームは基本的に送信されない。formから独立した位置に入力フォームを設置する場合は
				TextToken(type="html").token.attr-name form
				| 属性を忘れないようにすること。但し大抵これを使用する場合入力フォームの位置が通常より遠ざかる位置にあることが多いためフォームの形としては不適切になりやすいことには注意すること。またHTML5の要素故に旧バージョンのブラウザでは対応していないことが多いので注意が必要。

	section
		h2 参考リンク
		p
			NuxtLink(to="https://developer.mozilla.org/ja/docs/Web/HTML/Element/Input", target="_blank", rel="external noopener") MDN Web Docs
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'input要素' });
const indexStore = useIndexStore();

const CB01 = ref(`<input type="button" value="ボタン" />`);

const CB02 = ref(`<label><input type="checkbox" value="1" />内容1</label>
<label><input type="checkbox" value="2" />内容2</label>
<label><input type="checkbox" value="3" />内容3</label>`);

const CB03 = ref(`<input type="color" value="#FFFFFF" />`);
const CB04 = ref(`<input type="date" />`);
const CB05 = ref(`<input type="datetime-local" />`);
const CB06 = ref(`<input type="email" />`);
const CB07 = ref(`<input type="file" />`);
const CB08 = ref(`<input type="hidden" />`);
const CB09 = ref(`<input type="image" />`);
const CB10 = ref(`<input type="month" />`);
const CB11 = ref(`<input type="number">`);
const CB12 = ref(`<input type="password">`);
const CB13 = ref(`<label><input type="radio" value="1">内容1</label>`);

const CB14 = ref(`<label><input type="radio" name="bread" value="1">内容1</label>
<label><input type="radio" name="bread" value="2">内容1</label>
<label><input type="radio" name="bread" value="3">内容1</label>`);

const CB15 = ref(`<input type="range">`);
const CB16 = ref(`<input type="reset">`);
const CB17 = ref(`<input type="search">`);
const CB18 = ref(`<input type="submit">`);
const CB19 = ref(`<input type="tel">`);
const CB20 = ref(`<input type="text">`);
const CB21 = ref(`<input type="time">`);
const CB22 = ref(`<input type="url">`);
const CB23 = ref(`<input type="week">`);
const CB24 = ref(`<input type="text" name="your-name" autofocus="autofocus">`);
const CB25 = ref(`<input type="submit" formaction="sample.php">`);
const CB26 = ref(`<input type="text" name="your-name">`);
const CB27 = ref(`<input type="submit" name="submit" value="送信確認">`);
const CB28 = ref(`<input type="text" name="your-name" value="山田太郎">`);


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
		dt {
			&:not(:first-child) {
				margin-top: 1.5em;
			}
		}

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

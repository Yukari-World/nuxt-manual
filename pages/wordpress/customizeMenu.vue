<template lang="pug">
div
	v-alert(type='info', border='left', colored-border, dense, elevation='5')
		h2 {{ $t('common.stub.work_in_progress.title') }}
		p {{ $t('common.stub.work_in_progress.desc') }}

	section
		h2 説明
		p WordpressはHtmlとCSSとPHPが理解できれば大体のカスタマイズが出来るが、ソースコードを逐次編集する必要があるのは後の使用者側へ渡ったとしても使い勝手が悪く、思いがけない不具合を招く場合がある。そこでテーマ側でカスタマイズが出来るようにするためにメニュー項目の追加方法を学ぶ。

	section
		h2 カスタマイズメニューとは
		.d-flex.justify-space-between.flex-column.flex-md-row
			p
				| カスタマイズメニューとはWordpressのテーマにあるメニュー項目である。
				br
				| Wordpressのテーマによっては細かなカスタマイズが出来るものもあるが、それとは逆に非常に項目数が少ないものもある。また、メニュー項目は自動的に追加されたりはしないので、追加作業が必要となる。
			div
				v-skeleton-loader.mx-auto(type='image', width='245', max-width='245', height='544')
					v-img(src='/img/wordpress-img1.png', eager, max-width='245', max-height='544')
				p カスタマイズメニューの例

	section
		h2 セクションとパネルの追加
		h3 セクションとパネルの違い
		p セクションとパネルは見た目上は似ているが、以下のような役割を持つ。
		ul
			li セクション
				ul
					li カスタマイズ項目が格納されたメニューの見出し
					li 必ず使用する
			li パネル
				ul
					li 複数のセクションを一つにまとめる大見出しの役割
					li 必ずしも使用する必要はない
		.d-flex.justify-space-around.align-center.flex-column.flex-md-row
			div
				v-skeleton-loader.mx-auto(type='image', width='250', max-width='250', height='400')
					v-img(src='/img/wordpress-img2.png', max-width='250')
				p パネルの例
			p →
			div
				v-skeleton-loader(type='image')
					v-img(src='/img/wordpress-img3.png', max-width='250')
				p セクションの例
			p →
			div
				v-skeleton-loader(type='image')
					v-img(src='/img/wordpress-img4.png', max-width='250')
				p 設定項目の例

		h3 関数の追加
		p
			| メニュー項目を追加するには関数を追加する必要がある。
			| まず、メニュー項目を追加したいテーマのfunctions.phpに以下の関数を追加する。
		pre.language-php.line-numbers: code.
			function theme_customizer($wp_customize) : void {
				// ここに内容を入力
			}
			add_action('customize_register', 'theme_customizer');

		p この関数の内部にカスタマイズ項目を記述する。

		h3 セクションの追加
		p
			| テーマカスタマイズに項目を追加するにはセクションが必要となる。
			| 先程記述した関数に以下の内容を入力する。なお、オプションの項目は必須ではない。また、
			code.language-php
				span.token.function __
				span.token.punctuation (
				span.token.punctuation )
			| の関数はテーマのローカライズに使用するため、必要なければ省略してよい。
		pre.language-php.line-numbers: code.
			function theme_customizer($wp_customize) : void {
				$wp_customize-&gt;add_section('social_link', // セクションID。同じ名前は使わないこと(必須)
					array(
						'title' =&gt; __('項目名', 'mytheme'), // セクションのタイトル(必須)
						'priority' =&gt; 200, // セクションの優先順位。大きい程セクションが下に来る(必須)
						'capability' =&gt; 'edit_theme_options', // 権限 (オプション)
						'description' =&gt; __('Text', 'mytheme'), // ツールチップ表示内容(オプション)
					)
				);
			}
			add_action('customize_register', 'theme_customizer');

		p これでセクション項目が追加されるが、設定項目が空(何も設定されていない)の場合、メニューに表示されない。そのため、追加されているかどうかは設定項目の追加をしてから行う。

		h3 パネルの追加

	section
		h2 設定項目の追加
		p
			| 設定項目は複数の種類があり、設定の仕方や反映方法が異なる。今回は設定の中でも簡単な内容を行う。
			| 設定項目は
			code.language-php: span.token.function add_setting
			| と
			code.language-php: span.token.function add_control
			| の2つの関数を必要とする。
		pre.language-php.line-numbers: code.
			$wp_customize-&gt;add_setting(
				'theme_options[option_tag]', // 設定を格納する変数(必須)
				array(
					'default' =&gt; '#', // 既定値(オプション)
					'type' =&gt; 'option', // optionを指定(必須)
					'capability' =&gt; 'edit_theme_options', // 権限 (オプション)
					'transport' =&gt; 'refresh', // 設定を変更した時のライブプレビューの反映タイミング(オプション)
				)
			);

			$wp_customize-&gt;add_control(
				'theme_options[option_tag]', // 設定を格納する変数。上で指定した変数を入力する。(必須)
				array(
					'label' =&gt; __('項目名', 'mytheme'), // 管理画面に表示するコントロール名(必須)
					'section' =&gt; 'social_link', // このコントロールを出力するセクションのID名(必須)
					'capability' =&gt; 'edit_theme_options', // 権限 (オプション)
					'type' =&gt; 'text', // 設定項目の種類(必須)
				)
			);
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';

export default {
	data() {
		return {
			header: {
				title: 'カスタマイズ項目の追加',
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
			this.$nuxt.$emit('update-header', this.header.title);
		},
	},
};
</script>

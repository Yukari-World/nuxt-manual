<template lang="pug">
.category--wordpress.page--customize-menu
	AlertStub

	section
		h2 説明
		p
			| WordpressはHtmlとCSSとPHPが理解できれば大体のカスタマイズが出来るが、ソースコードを逐次編集する必要があるのは後の使用者側へ渡ったとしても使い勝手が悪く、思いがけない不具合を招く場合がある。
			| そこでテーマ側でカスタマイズが出来るようにするためにメニュー項目の追加方法を学習する。

	section
		h2 カスタマイズメニューとは
		.d-flex.justify-space-between.flex-column.flex-md-row
			p
				| カスタマイズメニューとはWordpressのテーマにあるメニュー項目である。
				br
				| Wordpressのテーマによっては細かなカスタマイズが出来るテーマもあるが、それとは逆に項目数が少ないテーマもある。
				| これらのカスタマイズ自由度はテーマ作成者側に依存され、
				del テーマの購入を誘導するためにわざと一部不自由に作られていることがある
				| 。
				br
				| メニュー項目は自動的に追加されないため手動での作業が必要となるが、作成することで利用者側で簡単にカスタマイズを行う事が出来るようになる。
			.w-245
				v-skeleton-loader.mx-auto(type="image", width="245", max-width="245", height="544")
					v-img(src="/img/wordpress-img1.png", eager, max-width="245", max-height="544")
				p.no-speak カスタマイズメニューの例

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
			.w-250
				v-skeleton-loader.mx-auto(type="image", width="250", max-width="250", height="400")
					v-img(src="/img/wordpress-img2.png", max-width="250")
				p.no-speak パネルの例
			p.no-speak →
			.w-250
				v-skeleton-loader(type="image", width="250", max-width="250")
					v-img(src="/img/wordpress-img3.png", max-width="250")
				p.no-speak セクションの例
			p.no-speak →
			.w-250
				v-skeleton-loader(type="image", width="250", max-width="250")
					v-img(src="/img/wordpress-img4.png", max-width="250")
				p.no-speak 設定項目の例

		h3 関数の追加
		p
			| メニュー項目を追加するには関数を追加する必要がある。
			| まず、メニュー項目を追加したいテーマのfunctions.phpに以下の関数を追加する。
		BlockCode.language-php {{ CBSection }}

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
		BlockCode.language-php {{ CBSectionSample }}

		p これでセクション項目が追加されるが、設定項目が空(何も設定されていない)の場合、メニューに表示されない。そのため、追加されているかどうかは設定項目の追加をしてから行う。

		h3 パネルの追加

	section
		h2 設定項目の追加
		p
			| 設定項目は複数の種類があり、設定の仕方や反映方法が異なる。今回は設定の中でも簡単な内容を行う。
			| 設定項目は
			code.language-php
				span.token.function add_setting
				span.token.punctuation (
				span.token.punctuation )
			| と
			code.language-php
				span.token.function add_control
				span.token.punctuation (
				span.token.punctuation )
			| の2つの関数を必要とする。
		BlockCode.language-php {{ CBSetting }}
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'カスタマイズ項目の追加' });
const indexStore = useIndexStore();

const CBSection = ref(
`function theme_customizer($wp_customize) : void {
	// ここに内容を入力
}
add_action('customize_register', 'theme_customizer');`);

const CBSectionSample = ref(
`function theme_customizer($wp_customize) : void {
	$wp_customize->add_section('social_link', // セクションID。同じ名前は使わないこと(必須)
		array(
			'title' => __('項目名', 'mytheme'), // セクションのタイトル(必須)
			'priority' => 200, // セクションの優先順位。大きい程セクションが下に来る(必須)
			'capability' => 'edit_theme_options', // 権限 (オプション)
			'description' => __('Text', 'mytheme'), // ツールチップ表示内容(オプション)
		)
	);
}
add_action('customize_register', 'theme_customizer');`);

const CBSetting = ref(
`$wp_customize->add_setting(
	'theme_options[option_tag]', // 設定を格納する変数(必須)
	array(
		'default' => '#', // 既定値(オプション)
		'type' => 'option', // optionを指定(必須)
		'capability' => 'edit_theme_options', // 権限 (オプション)
		'transport' => 'refresh', // 設定を変更した時のライブプレビューの反映タイミング(オプション)
	)
);

$wp_customize->add_control(
	'theme_options[option_tag]', // 設定を格納する変数。上で指定した変数を入力する。(必須)
	array(
		'label' => __('項目名', 'mytheme'), // 管理画面に表示するコントロール名(必須)
		'section' => 'social_link', // このコントロールを出力するセクションのID名(必須)
		'capability' => 'edit_theme_options', // 権限 (オプション)
		'type' => 'text', // 設定項目の種類(必須)
	)
);`);


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
.category--wordpress {
	&.page--customize-menu {
		.w-245 {
			width: 245px;
		}

		.w-250 {
			width: 250px;
		}
	}
}
</style>

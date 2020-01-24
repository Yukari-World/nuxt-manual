<template lang="pug">
v-timeline(reverse)
	v-timeline-item
		v-card
			v-card-title.headline 2020/01/06
			v-card-text
				ul
					li Gitの項目を追加
					li 技術マニュアル『Netlify』を作成
					li 技術マニュアル『origin/HEADについて』を作成
					li 技術マニュアル『git-flow』を作成
					li 公式サイトリンクを『リンク』、参考ページリンクを『参考リンク』と分離

	v-timeline-item
		v-card
			v-card-title.headline 2019/12/19
			v-card-text
				ul
					li 更新履歴のページをリニューアル

	v-timeline-item
		v-card
			v-card-title.headline 2019/12/17
			v-card-text
				ul
					li sitemapの作成
					li 新規サーバーにて公開

	v-timeline-item
		v-card
			v-card-title.headline 2019/12/16
			v-card-text
				ul
					li Nuxt用にテーマを最適化
					li Nodeパッケージのセキュリティ修正

	v-timeline-item
		v-card
			v-card-title.headline 2019/11/29
			v-card-text
				ul
					li スクロールバーが透明になっていた問題を修正

	v-timeline-item
		span(slot='opposite') Nuxt時代
		v-card
			v-card-title.headline 2019/11/25
			v-card-text
				ul
					li Nuxtにマニュアルを移行

	v-timeline-item
		v-card
			v-card-title.headline 2019/08/23
			v-card-text
				ul
					li Lightレイアウトからサイズ情報に関する記述を削除
					li prismの更新
					li prismをLgithレイアウトで使用する時、Light系のスタイルを使用するように
					li vueのasyncの記述ミスを修正

	v-timeline-item
		v-card
			v-card-title.headline 2019/08/16
			v-card-text
				ul
					li Lightレイアウトの導入
					li vue.jsの試験的導入
					li 技術マニュアル『IndexedDB』を追加
					li 技術マニュアル『スライダーレイアウト』を追加
					li 不要なWAI-ARIAの削除

	v-timeline-item
		v-card
			v-card-title.headline 2019/06/11
			v-card-text
				ul
					li IndexedDBを利用したデータ保管方法に変更。非対応時の処理として以前のそーコードも残しています

	v-timeline-item
		span(slot='opposite') 文章の添削
		v-card
			v-card-title.headline 2019/06/10
			v-card-text
				ul
					li textlintによる不適切な日本語表記を添削。完全な添削は完了していません

	v-timeline-item
		span(slot='opposite') レスポンス強化
		v-card
			v-card-title.headline 2019/05/24
			v-card-text
				ul
					li JavaScriptにおける不要な処理の削除、削減、処理速度の最適化
					li JavaScriptファイルを細分化
					li 技術マニュアル『ファイルダウンロード』のHTMLフォーマットの修正
					li 技術マニュアル『特殊なグラデーションリスト』をHTMLフォーマットの修正

	v-timeline-item
		span(slot='opposite') レスポンス強化
		v-card
			v-card-title.headline 2019/05/09
			v-card-text
				ul
					li ソースマップの処理方法を変更
					li 不要ファイルが複数あるのでそれを削除

	v-timeline-item
		span(slot='opposite') レスポンス強化
		v-card
			v-card-title.headline 2019/04/25
			v-card-text
				ul
					li 全てのJavaScriptファイルを圧縮

	v-timeline-item
		v-card
			v-card-title.headline 2019/04/10
			v-card-text
				ul
					li 技術マニュアル『AS(別名)』を更新
					li サンプルデータのSCSSファイルを更新
					li SCSSの最適化

	v-timeline-item
		v-card
			v-card-title.headline 2019/04/03
			v-card-text
				ul
					li フッターを常に真下に来るように変更

	v-timeline-item
		v-card
			v-card-title.headline 2019/02/22
			v-card-text
				ul
					li 技術マニュアル『[MySQL] INSERT WHERE EXISTS』の内容が全く理解できなかったので更新
					li JavaScriptにおける不要な処理の削除、削減、処理速度の最適化(75% Refine)
					li CSSの最適化と細かな文の修正、初期化方法の変更

	v-timeline-item
		v-card
			v-card-title.headline 2019/02/06
			v-card-text
				ul
					li リソースのプリロード機能の実装ページを追加
					li 技術マニュアル『AS(別名)』を追加
					li 導入マニュアル『EditorConfig』を更新
					li HTML自動整形ルールを変更

	v-timeline-item
		v-card
			v-card-title.headline 2019/01/31
			v-card-text
				ul
					li JavaScriptにおける不要な処理の削除、削減、処理速度の最適化

	v-timeline-item
		v-card
			v-card-title.headline 2019/01/24
			v-card-text
				ul
					li 技術マニュアル『[CodeIgniter] データベース接続』を追加
					li 技術マニュアル『ファイルダウンロード』のリンクを修正

	v-timeline-item
		v-card
			v-card-title.headline 2019/01/16
			v-card-text
				ul
					li 外部リンクの挙動関連の調整。基本的に変化はありません
					li SEOの強化

	v-timeline-item
		v-card
			v-card-title.headline 2019/01/10
			v-card-text
				ul
					li 技術マニュアル『日付時間 date()』を更新、Pugテンプレート記述ミスによるHtml出力のミスを修正
					li seedを16進数で出力できるように変更

	v-timeline-item
		span(slot='opposite') 2019
		v-card
			v-card-title.headline 2019/01/07
			v-card-text
				ul
					li XorShiftの乱数Xの取得方法が間違っていたのを修正

	v-timeline-item
		v-card
			v-card-title.headline 2018/12/21
			v-card-text
				ul
					li カテゴリページの仮追加とリンクの作成。内容は追って作成

	v-timeline-item
		v-card
			v-card-title.headline 2018/12/11
			v-card-text
				ul
					li 技術マニュアル『特殊なグラデーションリスト』を追加
					li メニューリストの不具合を修正

	v-timeline-item
		span(slot='opposite') 体裁の強化
		v-card
			v-card-title.headline 2018/12/07
			v-card-text
				ul
					li リンク先がMDN Web Docsとなっているページリンクのリンク名を変更
					li 日本語が不適切な説明文や文脈を修正

	v-timeline-item
		v-card
			v-card-title.headline 2018/12/06
			v-card-text
				ul
					li 技術マニュアル『文字装飾による可読性の向上』の解説を追記
					li ページデザインの修正。空白の間隔を変更
					li 日本語が不適切な説明文や文脈を修正

	v-timeline-item
		span(slot='opposite') レスポンス強化
		v-card
			v-card-title.headline 2018/11/30
			v-card-text
				ul
					li リソースのプリロード機能の実装。但し、現時点で利用可能なブラウザはごく少数です
					li Safariにおける描画不具合を修正
					li 技術マニュアル『バインドを利用したSQLの実行』におけるソースコード入力ミスを修正

	v-timeline-item
		v-card
			v-card-title.headline 2018/11/20
			v-card-text
				ul
					li JavaScriptのドキュメント類を再度整形
					li 技術マニュアル『フェードイン』を更新。画像読み込みに遅延読み込みを使用
					li 技術マニュアル『IN()(複数選択)』を追加

	v-timeline-item
		v-card
			v-card-title.headline 2018/11/09
			v-card-text
				ul
					li JavaScriptの処理手順の調整
					li JavaScriptコーディングフォーマットを僅かに変更
					li SCSSの最適化
					li マニュアルデザインとレスポンシブデザインの更新

	v-timeline-item
		v-card
			v-card-title.headline 2018/10/30
			v-card-text
				ul
					li Worker Taskの実装
					li JavaScriptの処理手順の調整
					li JavaScriptコーディングフォーマットを僅かに変更

	v-timeline-item
		span(slot='opposite') レスポンス強化
		v-card
			v-card-title.headline 2018/10/26
			v-card-text
				ul
					li lazysizesの導入。但し現在未使用
					li JavaScriptの処理を変更
					li Worker処理の予約
					li CSSの最適化と細かな文の修正

	v-timeline-item
		v-card
			v-card-title.headline 2018/10/24
			v-card-text
				ul
					li 非同期通信の調整

	v-timeline-item
		span(slot='opposite') 印刷対応
		v-card
			v-card-title.headline 2018/10/18
			v-card-text
				ul
					li ページデザインの調整
					li ページ印刷時背景色指定を無効化するように変更
					li ランダムワードのアニメーションフレームの不一致問題を修正
					li 技術マニュアル『input要素』を更新

	v-timeline-item
		v-card
			v-card-title.headline 2018/10/17
			v-card-text
				ul
					li Wordpressの項目を仮追加
					li 書きかけのページの趣旨を表示するように変更
					li 技術マニュアル『input要素』を更新

	v-timeline-item
		v-card
			v-card-title.headline 2018/10/16
			v-card-text
				ul
					li CSSアニメーションフレーム時間の調整
					li 技術マニュアルの表示順序の変更
					li 技術マニュアル『input要素』を追加

	v-timeline-item
		v-card
			v-card-title.headline 2018/10/10
			v-card-text
				ul
					li ランダムワードページのスタイルを変更

	v-timeline-item
		v-card
			v-card-title.headline 2018/10/04
			v-card-text
				ul
					li 技術マニュアル『[Apache] HTMLファイルでPHPを動かす』を追加

	v-timeline-item
		v-card
			v-card-title.headline 2018/10/01
			v-card-text
				ul
					li 導入マニュアル『EditorConfig』を追加
					li 技術マニュアル『localStorage』を更新
					li 技術マニュアル『PDO(PHP Data Objects)』を更新
					li 技術マニュアル『JOIN(テーブル結合)』を更新

	v-timeline-item
		v-card
			v-card-title.headline 2018/09/28
			v-card-text
				ul
					li あるリンクが反応しない問題を修正
					li リンク切れの修正
					li 技術マニュアル『localStorage』を追加

	v-timeline-item
		v-card
			v-card-title.headline 2018/09/26
			v-card-text
				ul
					li 展開ボタンの追加
					li SCSSの表記ミスを修正
					li (Gitlab処理) gzip圧縮処理を追加

	v-timeline-item
		v-card
			v-card-title.headline 2018/09/21
			v-card-text
				ul
					li 全ページタイトルに『HTML Technical Manual』の文字列を追加
					li サンプルページ『Prismハイライトの例』を追加。現在ドラフト段階
					li 技術マニュアル『フェードイン』を更新

	v-timeline-item
		span(slot='opposite') レスポンス強化
		v-card
			v-card-title.headline 2018/09/20
			v-card-text
				ul
					li 画像圧縮率の変更
					li ファイル軽量化による最適化
					li JavaScriptのソースマップ出力方法の修正
					li 技術マニュアル『フェードイン』を追加

	v-timeline-item
		v-card
			v-card-title.headline 2018/09/19
			v-card-text
				ul
					li SCSSの項目を仮追加
					li スマートフォンのサイドバー処理の最適化
					li JavaScriptの依存を減少
					li ボタンレイアウトが機能していない問題を修正

	v-timeline-item
		v-card
			v-card-title.headline 2018/09/18
			v-card-text
				ul
					li トップページのページ名をいい加減修正
					li サイドバーを折りたたみ方式の処理方法を調整
					li サイドバー同期処理の修正
					li ソースファイルが正しく読み込まれない問題を修正

	v-timeline-item
		span(slot='opposite') Babel時代
		v-card
			v-card-title.headline 2018/09/14
			v-card-text
				ul
					li Babel処理によるJavaScriptの後方互換の確保
					li サイドバーを折りたたみ方式に変更。折りたたみ状態はローカルストレージにフラグが保持されます

	v-timeline-item
		v-card
			v-card-title.headline 2018/09/04
			v-card-text
				ul
					li サイドメニューの順序を更新
					li 技術マニュアル『Pug』を更新
					li 説明の表記ブレを修正

	v-timeline-item
		span(slot='opposite') Ajaxの始動
		v-card
			v-card-title.headline 2018/09/03
			v-card-text
				ul
					li Ajaxのサンプルデータの追加
					li Ajax利用可能によるソースコードの大幅改変
					li 技術マニュアル『npm コマンド』を追加
					li 技術マニュアル『Pug』を更新

	v-timeline-item
		v-card
			v-card-title.headline 2018/08/31
			v-card-text
				ul
					li 一部のソースコードを外部に置くようにした
					li 導入マニュアル『Browsersync導入マニュアル』を更新
					li 技術マニュアル『Pug』を更新

	v-timeline-item
		v-card
			v-card-title.headline 2018/08/30
			v-card-text
				ul
					li ページ数の増加に伴いPug→HTMLへの変換処理を変更
					li 技術マニュアル『Pug』を更新

	v-timeline-item
		v-card
			v-card-title.headline 2018/08/29
			v-card-text
				ul
					li 技術マニュアル『Pug』を追加
					li 技術マニュアル『Sass』を更新

	v-timeline-item
		v-card
			v-card-title.headline 2018/08/28
			v-card-text
				ul
					li JavaScriptの配列のとり方を変更
					li 技術マニュアル『Sass』を更新

	v-timeline-item
		v-card
			v-card-title.headline 2018/08/27
			v-card-text
				ul
					li JavaScriptの配列のとり方を変更
					li 技術マニュアル『Sass』を追加

	v-timeline-item
		v-card
			v-card-title.headline 2018/08/24
			v-card-text
				ul
					li Xorshiftの乱数シード取得方法と処理方法を更新
					li 技術マニュアル『TRANSACTION ROLLBACK』を『TRANSACTION』に変更

	v-timeline-item
		v-card
			v-card-title.headline 2018/08/22
			v-card-text
				ul
					li 技術マニュアル『TRUNCATE(テーブルを空にする)』を更新

	v-timeline-item
		span(slot='opposite') おまけ機能の強化と致命的問題の修正
		v-card
			v-card-title.headline 2018/08/20
			v-card-text
				ul
					li リンクの問題を修正。Browsersyncを使用すると普通にリンクに繋がるから全く気づかなかった
					li ページデザインを更新しスクロールを独立化
					li JavaScript処理手順の更新し、乱数にXorshiftを使用するようにし、同じ時間(同じ秒数)に開いた場合、乱数結果が常に同じ結果になるようになった
					li 今回のミスを元に技術マニュアル『[Deprecated] httpの省略』を追加
					li 技術マニュアル『backgroundを重ねる』を更新

	v-timeline-item
		v-card
			v-card-title.headline 2018/08/17
			v-card-text
				ul
					li 更新履歴のページを追加
					li 技術マニュアル『backgroundを重ねる』を更新
					li 技術マニュアル『JOIN(テーブル結合)』を追加
					li 技術マニュアル『[MySQL] INT(11) の意味』を追加

	v-timeline-item
		v-card
			v-card-title.headline 2018/08/16
			v-card-text
				ul
					li JavaScript処理手順の更新
					li 更新履歴のページを追加
					li 技術マニュアル『backgroundを重ねる』を更新
					li 技術マニュアル『[MySQL] INT(11) の意味』を追加

	v-timeline-item
		v-card
			v-card-title.headline 2018/08/15
			v-card-text
				ul
					li トップページを更新
					li メインテンプレートレイアウトを更新し、headタグに要素を追加できるように変更
					li 導入マニュアル『Browsersync導入マニュアル』を追加
					li 技術マニュアル『backgroundを重ねる』を更新
					li 技術マニュアル『グラデーション』を更新
					li 技術マニュアル『背景画像スクロールの固定』を更新

	v-timeline-item
		span(slot='opposite') デザインの強化
		v-card
			v-card-title.headline 2018/08/14
			v-card-text
				ul
					li トップページを更新
					li Otherの項目を追加
					li JavaScript処理手順の更新
					li マニュアルデザインとレスポンシブデザインの更新
					li レスポンシブデザインの不備を修正
					li 技術マニュアル『INSERT SELECT』を追加
					li 技術マニュアル『TRANSACTION ROLLBACK』を追加
					li 技術マニュアル『TRUNCATE(テーブルを空にする)』を追加
					li 技術マニュアル『[MySQL] INSERT WHERE EXISTS』を追加

	v-timeline-item
		v-card
			v-card-title.headline 2018/08/10
			v-card-text
				ul
					li トップページを更新
					li JavaScript処理手順の更新
					li レスポンシブデザインに対応

	v-timeline-item
		v-card
			v-card-title.headline 2018/08/09
			v-card-text
				ul
					li トップページを更新
					li 技術マニュアル『バインドを利用したSQLの実行』を追加
					li 技術マニュアル『brタグによる改行を無効化』を追加

	v-timeline-item
		span(slot='opposite') 機能の強化
		v-card
			v-card-title.headline 2018/08/08
			v-card-text
				ul
					li トップページを更新
					li HTMLの項目を追加
					li Node.jsの項目を追加
					li SQLの項目を追加
					li 技術マニュアル『backgroundを重ねる』を追加
					li 技術マニュアル『brタグによる改行を無効化』を追加
					li 技術マニュアル『背景画像スクロールの固定』を追加

	v-timeline-item
		v-card
			v-card-title.headline 2018/08/07
			v-card-text
				ul
					li トップページを更新
					li JavaScriptの項目を追加
					li PHPの項目を追加
					li メインテンプレートレイアウトを更新し、footerより下にJavaScriptを埋め込むことができるように変更
					li マニュアルデザインの更新
					li 技術マニュアル『PDO(PHP Data Objects)』を更新
					li 技術マニュアル『日付時間 date()』を追加
					li 技術マニュアル『ファイルを利用した二重起動防止』を追加

	v-timeline-item
		span(slot='opposite') 創成
		v-card
			v-card-title.headline 2018/08/06
			v-card-text
				ul
					li マニュアル作成開始
					li CSSの項目を追加
					li 技術マニュアル『グラデーション』を追加
</template>

<script>
import Prism from 'prismjs';

export default {
	data() {
		return {
			header: {
				title: '更新履歴'
			}
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
		}
	}
};
</script>

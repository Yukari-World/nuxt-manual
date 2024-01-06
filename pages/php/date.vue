<template lang="pug">
.category--php.page--date
	section
		h2 説明
		p 日付の表示は非常にややこしいものが多い。これはMySQLのDATE_FORMAT()にも言えることなのだが、今回はよく使用されるPHPの処理のみをピックアップする。

	section
		h2 使用方法と解説
		p シングルクォーテーションを使用しているが、ダブルクォーテーションでも問題ない。尚、出力結果はJavaScriptを利用して出力している。

		h3 年月日を表示する
		BlockCode.language-php: pre.
			date('Y-m-d')
		p
			| 出力結果:&nbsp;
			time#date01
			br
			| `Y`を小文字にした場合、年の下2桁が出力される。

		BlockCode.language-php: pre.
			date('y-m-d')
		p
			| 出力結果:&nbsp;
			time#date02

		h3 年月日を0を省いて表示する
		BlockCode.language-php: pre.
			date('Y年n月j日')
		p
			| 出力結果:&nbsp;
			time#date03
			br
			| 日本語はdate関数に含めても問題なく出力されるが、英語はルールに従って変換されるので含めないように。

		h3 時間を表示する
		BlockCode.language-php: pre.
			date('H:i:s')
		p
			| 出力結果:&nbsp;
			time#date04
			br
			| 注意すべき点として分は`m`ではなく`i`であることである。`m`を使用した場合、月が出力されるため、注意が必要。

		h3 年月日を連結して表示する
		BlockCode.language-php: pre.
			date('Ymd')
		p
			| 出力結果:&nbsp;
			time#date05

		h3 日時を表示する
		BlockCode.language-php: pre.
			date('Y-m-d H:i:s')
		p
			| 出力結果:&nbsp;
			time#date06
			br
			| MySQLのDATETIMEフォーマットの形である。

	section
		h2 使用上の注意
		ul
			li
				| php.iniのタイムゾーン設定がない場合、標準時間(UTC+0)を元に出力される。PHPソースでこれを解決する場合、
				BlockCode.language-php: pre.
					date_default_timezone_set('Asia/Tokyo');
				| を入力することで解決できる。

	section
		h2 参考リンク
		p
			a(href='https://www.php.net/manual/ja/function.date.php', target='_blank', rel='external noopener') PHP.net
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: '日付時間 date()' });
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

	const date01 = document.getElementById('date01') as HTMLElement;
	const date02 = document.getElementById('date02') as HTMLElement;
	const date03 = document.getElementById('date03') as HTMLElement;
	const date04 = document.getElementById('date04') as HTMLElement;
	const date05 = document.getElementById('date05') as HTMLElement;
	const date06 = document.getElementById('date06') as HTMLElement;

	const dToday = new Date();
	const year = dToday.getFullYear();
	const month = ('0' + (dToday.getMonth() + 1)).slice(-2);
	const day = ('0' + dToday.getDate()).slice(-2);
	const hour = ('0' + dToday.getHours()).slice(-2);
	const minute = ('0' + dToday.getMinutes()).slice(-2);
	const second = ('0' + dToday.getSeconds()).slice(-2);

	date01.textContent = year + '-' + month + '-' + day;
	date02.textContent = year.toString().substr(2, 2) + '-' + month + '-' + day;
	date03.textContent = year + '年' + (dToday.getMonth() + 1) + '月' + dToday.getDate() + '日';
	date04.textContent = hour + ':' + minute + ':' + second;
	date05.textContent = year + month + day;
	date06.textContent = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
});
</script>

<script lang="ts">
</script>

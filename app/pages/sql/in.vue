<template lang="pug">
.category--sql.page--in
	section
		h2 説明
		p
			| データベースにおいて同じ項目から複数個選択する場合がよくある。その際、
			TextToken(type="sql").keyword.keyword-WHERE WHERE
			| 句に
			TextToken(type="sql").operator OR
			| で複数個記述していくと選択個数によっては長い文となり、ミスが起きた時に解り辛くなる。そこで、同じ項目を複数選択する時、短く簡単に記述することができる方法がIN()である。

	section
		h2 使用方法と解説
		p ユーザーテーブルからID 200, 224, 371, 441, 503のユーザーデータを取得する場合、通常通り記述する場合、
		BlockCode.language-sql {{ CBWithoutIN }}
		p となる。対象となる列の文字列が短い分、記述ミスがあった場合でもすぐに気付けるが、長く複雑になると難しくなる。

		p 次に上記と同じ内容をIN()を使用して記述する場合、
		BlockCode.language-sql {{ CBWithIN }}
		p となる。

	section
		h2 使用上の注意
		ul
			li
				| SQLにおいて1つの
				TextToken(type="sql").operator IN
				| 句で指定できる数は1000個である。それ以上指定する場合は
				TextToken(type="sql").operator OR
				| 句で区切るか別にSQL文を用意する必要がある。PHP等でSQL文を生成する場合はその点を念頭に加えたうえでコーディングする必要がある。
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'IN()(複数選択)' });
const indexStore = useIndexStore();

const CBWithoutIN = ref(`SELECT
	*
FROM
	\`user\`
WHERE
	\`id\` = 200 OR \`id\` = 224 OR \`id\` = 371 OR \`id\` = 441 OR \`id\` = 503
;`);

const CBWithIN = ref(`SELECT
	*
FROM
	\`user\`
WHERE
	\`id\` IN(200, 224, 371, 441, 503)
;`);


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

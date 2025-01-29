<template lang="pug">
.category--sql.sub--mysql.page--int
	section
		h2 説明
		p MySQLのテーブル上にINT(11)やTINYINT(4)といったカッコの数字がある。これの意味を説明する。

	section
		h2 解説
		p
			| このカッコの値は桁数制限と見えるが、そうではなく空白、もしくは0で埋める文字数のことを示している。phpMyAdminやHeidiSQL等のGUIでは分かりづらいが、コンソールの場合、この結果が理解しやすい。
			br
			| 例えば、INT(6)の場合、
		BlockCode.language-markdown {{ TextB }}
		p となる。
			br
			| この時、6桁より大きい値が挿入された場合、その行だけ桁がはみ出て表示される

	section
		h2 主な使い道
		p ZEROFILL(残りの桁部分を0で埋める)に対して最も使い道が多い。
		BlockCode.language-sql {{ CBSQL }}

	section
		h2 使用上の注意
		ul
			li VARCHAR(50)等の文字列に関しては入力可能な文字数なので混同に注意。

	section
		h2 参考リンク
		p
			NuxtLink(to="https://stackoverflow.com/questions/5634104/what-is-the-size-of-column-of-int11-in-mysql-in-bytes", target="_blank", rel="external noopener") types - What is the size of column of int(11) in mysql in bytes? - Stack Overflow
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'INT(11) の意味' });
const indexStore = useIndexStore();

const TextB = ref(`123456
     1
    12
   123
  1234
 12345
123456
1234567`);

const CBSQL = ref(`CREATE TABLE \`test\` (
	\`id\` INT ZEROFILL NOT NULL,
	\`name\` VARCHAR(20) NOT NULL,
	PRIMARY KEY (\`id\`)
)
COLLATE='utf8mb4_bin'
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

<template lang="pug">
.category--sql.page--delete-flag
	AlertStub

	section
		h2 説明
		p データベースのデータを削除する時、古いデータを保持しておきたい時、役に立つのが削除フラグである。削除フラグを使用しない(データの削除)場合、そのデータを利用していたデータベースリンクが消失してしまうが、削除フラグを使用する場合、データは残っているのでリンクは保持することができる。

	section

	section
		h2 使用上の注意
		ul
			li 生成と削除を多く繰り返すデータベースの場合、この方法はあまり推奨されない。データベースに古いデータが残り続けるため、容量を圧迫するためである。
</template>

<script setup lang="ts">
import { highlightAll } from 'prismjs';
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: '削除フラグ' });
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

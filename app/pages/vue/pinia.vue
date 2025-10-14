<template lang="pug">
.page--vue.page--pinia
	AlertStub(title="この情報はPiniaバージョン2.3.1時点の情報です", text="アップデートによってこの仕様が変わる可能性があります。動作しない場合、最新のマニュアルを参照するようにしてください。")

	section
		h2 説明
		p PiniaはVue.jsのための状態管理ライブラリです。Vuexの代替として設計されており、よりシンプルで直感的なAPIを提供します。Piniaを使用することで、アプリケーションの状態を一元管理し、コンポーネント間でのデータ共有が容易になります。

	section
		h2 説明
		p 記述前
		BlockCode.language-sql {{ CBstrToRef }}

	section
		h2 リンク
		p
			NuxtLink(to="https://pinia.vuejs.org/", target="_blank", rel="external noopener") Pinia
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'Pinia' });
const indexStore = useIndexStore();
const { title } = storeToRefs(indexStore);

const CBstrToRef = ref(`import { useIndexStore } from '@/store';

const indexStore = useIndexStore();
const { title } = storeToRefs(indexStore);`);


// ----------------------------------------------------------------------------------------------------
// Header Data

useHead({
	title: header.title,
});


// ----------------------------------------------------------------------------------------------------
// Create Component

title.value = header.title;
</script>

<script lang="ts">
</script>

<template lang="pug">
//- フッター内容1
//- 左側に表示する内容
p.yw-word
	//- eslint-disable-next-line vue/no-v-html
	NuxtLink#randomWord(:to="link", v-html="footerText")
</template>

<script setup lang="ts">
defineProps({
	link: {
		type: String,
		required: true,
	},
	footerText: {
		type: String,
		required: true,
	},
});
</script>

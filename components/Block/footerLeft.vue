<template lang="pug">
//- フッター内容1
//- 左側に表示する内容
p.yw-word
	nuxt-link#randomWord(:to="link", v-html="footerText")
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

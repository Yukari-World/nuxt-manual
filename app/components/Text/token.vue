<template lang="pug">
code.language-css(v-if="type === 'css'")
	span.token(:class="$attrs.class")
		slot
code.language-html(v-else-if="type === 'html'")
	span.token(:class="$attrs.class")
		slot
code.language-javascript(v-else-if="type === 'javascript'")
	span.token(:class="$attrs.class")
		slot
code.language-php(v-else-if="type === 'php'")
	span.token(:class="$attrs.class")
		slot
code.language-pug(v-else-if="type === 'pug'")
	span.token(:class="$attrs.class")
		slot
code.language-sass(v-else-if="type === 'sass'")
	span.token(:class="$attrs.class")
		slot
code.language-scss(v-else-if="type === 'scss'")
	span.token(:class="$attrs.class")
		slot
code.language-sql(v-else-if="type === 'sql'")
	span.token(:class="$attrs.class")
		slot
</template>

<script setup lang="ts">
defineProps({
	type: {
		type: String,
		required: true,
	},
});
</script>

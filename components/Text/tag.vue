<template lang="pug">
code.language-html
	span.token.punctuation &lt;
	span.token.tag
		slot
	span.token.punctuation &gt;
</template>

<script setup lang="ts">
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Property List

defineProps({
	text: {
		type: String,
		default: '',
	},
});
</script>

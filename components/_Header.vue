<template lang="pug">
	v-toolbar-title {{ title }}
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '',
		},
	},
};
</script>

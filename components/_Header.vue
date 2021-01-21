<template lang="pug">
	v-skeleton-loader(v-if='title === ""', boilerplate, type='text')
	v-toolbar-title(v-else) {{ title }}
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: 'Now Loading...',
		},
	},
};
</script>

<template lang="pug">
v-toolbar-title {{ title }}
</template>

<script lang="ts">
export default {
	name: 'CommonHeader',

	props: {
		title: {
			type: String,
			default: 'Now Loading...',
		},
	},
};
</script>

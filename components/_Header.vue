<template lang="pug">
v-skeleton-loader(v-if='title === ""', boilerplate, type='text')
v-toolbar-title(v-else) {{ title }}
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
	name: 'HeaderVue',

	props: {
		title: {
			type: String,
			default: 'Now Loading...',
		} as PropOptions<String>,
	},
});
</script>

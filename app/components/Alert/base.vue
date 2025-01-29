<template lang="pug">
v-alert(v-if="(!text)", :type="type", border="start", colored-border, dense, elevation="5", :title="title")
	slot
v-alert(v-else, :type="type", border="start", colored-border, dense, elevation="5", :title="title", :text="text")
</template>

<script setup lang="ts">
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Types

type TAlert = 'error' | 'success' | 'warning' | 'info' | undefined;


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Property List

defineProps({
	type: {
		type: String as PropType<TAlert>,
		required: true,
	},
	title: {
		type: String,
		default: '',
	},
	text: {
		type: String,
		default: '',
	},
});
</script>

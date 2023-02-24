<template lang="pug">
v-toolbar-title {{ headerTitle }}
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const indexStore = useIndexStore();


// ----------------------------------------------------------------------------------------------------
// Computed

const headerTitle = computed(function() {
	return indexStore.getTitle;
});
</script>

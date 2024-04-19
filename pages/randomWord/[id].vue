<template lang='pug'>
BlockRandomWord(:target-id='Number($route.params.id)', :word-list='wordList[Number($route.params.id) - 1]')
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const indexStore = useIndexStore();


// ----------------------------------------------------------------------------------------------------
// Computed

const wordList = computed(function() {
	return indexStore.getRandomWords;
});
</script>

<script lang="ts">
</script>

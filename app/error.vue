<template lang="pug">
v-app#inspire
	NuxtLayout
		.page--error
			p {{ message }}
			p(v-if="description") {{ description }}
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const indexStore = useIndexStore();
const error = useError();
const header = reactive({ title: 'Nuxt Manual' });

const message = ref('');
const description = ref('');


if (error.value) {
	message.value = error.value.message;
	description.value = error.value.statusCode ? `Error Code: ${error.value.statusCode}` : '';
}

// ----------------------------------------------------------------------------------------------------
// Header Data

useHead({
	title: header.title,
});


// ----------------------------------------------------------------------------------------------------
// Mounted

onMounted(function () {
	indexStore.setTitle(header.title);
});
</script>

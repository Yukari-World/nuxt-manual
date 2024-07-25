<template lang="pug">
v-app#inspire
	NuxtLayout
		.page--error
			p {{ code }}
</template>

<script setup lang="ts">
const error = useError();
const header = reactive({ title: 'Nuxt Manual' });

const code = ref('');


if (error.value) {
	code.value = error.value.message;
}

// ----------------------------------------------------------------------------------------------------
// Header Data

useHead({
	title: header.title,
});
</script>

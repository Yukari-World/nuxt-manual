<template lang="pug">
v-app#inspire
	NuxtLayout
		NuxtLoadingIndicator
		NuxtPage
</template>

<script setup lang="ts">
// ----------------------------------------------------------------------------------------------------
// SEO Meta Data

useSeoMeta({
	title: 'Nuxt Technical Manual',
	ogTitle: 'Nuxt Technical Manual',
});


// ----------------------------------------------------------------------------------------------------
// Header Data

useHead({
	htmlAttrs: {
		lang: 'ja',
	},
});
</script>

<script lang="ts">
</script>

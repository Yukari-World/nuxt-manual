<template lang="pug">
.components--common--contents
	ul(v-if="categoryData && 'subCategory' in categoryData")
		template(v-for="(category, i) in categoryData.subCategory", :key="i")
			li(v-for="(list, j) in category.list", :key="j")
				NuxtLink(:to="localePath(categoryData.baseURL + (category.url ? category.url : '') + list.link)", :title="list.title") {{ list.title }}
	ul(v-else-if="categoryData && 'list' in categoryData")
		li(v-for="(list, j) in categoryData.list", :key="j")
			NuxtLink(:to="localePath(categoryURL + (categoryData.url ? categoryData.url : '') + list.link)", :title="list.title") {{ list.title }}
</template>

<script setup lang="ts">
import { useIndexStore, type ICategoryList } from '@/store';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const indexStore = useIndexStore();
const localePath = useLocalePath();


// ----------------------------------------------------------------------------------------------------
// Computed

const categoryData = computed(function () {
	if (props.mainCategory && props.subCategory) {
		return indexStore.getMenubyCategory('menu.' + props.mainCategory + '.subCategory.' + props.subCategory + '.title');
	} else if (props.mainCategory) {
		return indexStore.getMenubyCategory('menu.' + props.mainCategory + '.title');
	}

	return null;
});

const categoryURL = computed(function () {
	const temp = indexStore.getMenubyCategory('menu.' + props.mainCategory + '.title') as ICategoryList;
	return temp ? temp.baseURL : '';
});


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Property List

const props = defineProps({
	mainCategory: {
		type: String,
		default: '',
	},
	subCategory: {
		type: String,
	},
});
</script>

<script lang="ts">
</script>

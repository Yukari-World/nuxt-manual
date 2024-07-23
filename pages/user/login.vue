<template lang="pug">
.category--user.page--login
	v-form
		v-row
			v-col(cols="12", md="6")
				v-text-field(v-model="user", counter, label="User name", name="id")
			v-col(cols="12", md="6")
				v-text-field(v-model="password", counter, label="password", name="pass", :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'", :type="showPass ? 'text' : 'password'", @click:append="showPass = !showPass")
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'ログインページ' });
const indexStore = useIndexStore();
const user = ref('');
const password = ref('');
const showPass = ref(false);


// ----------------------------------------------------------------------------------------------------
// Header Data

useHead({
	title: header.title,
});


// ----------------------------------------------------------------------------------------------------
// Mounted

onMounted(function() {
	indexStore.setTitle(header.title);
});
</script>

<script lang="ts">
</script>

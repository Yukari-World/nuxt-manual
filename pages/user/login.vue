<template lang="pug">
.category-user.page-login
	v-form
		v-row
			v-col(cols='12', md='6')
				v-text-field(v-model='name', counter, label='User name', name='id')
			v-col(cols='12', md='6')
				v-text-field(v-model='password', :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'", counter, label='password', name='pass', :type="show1 ? 'text' : 'password'", @click:append='show1 = !show1')
</template>

<script lang="ts">
import Vue from 'vue';
// import firebase from '@/plugins/firebase';
import { highlightAll } from 'prismjs';

export default Vue.extend({
	data() {
		return {
			show1: false,
			name: '',
			password: '',
			header: {
				title: 'ログインページ',
			},
		};
	},

	head(): object {
		return {
			title: this.header.title,
		};
	},

	mounted() {
		highlightAll();
		// plugins.fileHighlight.highlight();
		this.updateHeader();
	},

	methods: {
		updateHeader() {
			// タイトルとして使いたい情報を渡す
			this.$nuxt.$emit('update-header', this.header.title);
		},
	},
});
</script>

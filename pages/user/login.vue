<template lang="pug">
v-form
	v-row
		v-col(cols='12', md='6')
			v-text-field(v-model='name', counter, label='User name', name='id')
		v-col(cols='12', md='6')
			v-text-field(v-model='password', :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'", counter, label='password', name='pass', :type="show1 ? 'text' : 'password'", @click:append='show1 = !show1')
</template>

<script>
// eslint-disable-next-line no-unused-vars
// import firebase from '@/plugins/firebase';
import Prism from 'prismjs';

export default {
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
	mounted() {
		Prism.highlightAll();
		// Prism.fileHighlight();
		this.updateHeader();
	},
	methods: {
		updateHeader() {
			// タイトルとして使いたい情報を渡す
			this.$nuxt.$emit('update-header', this.header.title);
		},
	},
};
</script>

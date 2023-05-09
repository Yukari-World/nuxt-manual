<template lang="pug">
div.layout--default
	//- サイドバー
	//- 内部処理はサイドバーコンポーネント参照
	v-navigation-drawer(v-model='drawer', app)
		CommonSidebar

	//- ページヘッダー
	v-app-bar(app)
		v-app-bar-nav-icon(aria-label='Side Menu', @click.stop='drawer = !drawer')
		CommonHeader
		v-spacer

		v-btn(icon, aria-label='Search')
			v-icon mdi-magnify

		v-menu(location='bottom left', transition='slide-y-transition')
			template(v-slot:activator='{ props }')
				v-btn(icon, aria-label='Menu', v-bind='props')
					v-icon mdi-dots-vertical
			v-list
				v-list-item(v-for="(temp, index) in headMenu", active-class='text-light-blue', link, nuxt, :to='temp.link', :key='index')
					template(v-slot:prepend)
						v-icon {{ temp.icon }}
					//- v-list-item-title(v-text="$t(temp.title)")
					v-list-item-title {{ $t(temp.title) }}

		v-menu(location='bottom left', transition='slide-y-transition')
			template(v-slot:activator='{ props }')
				v-btn(icon, aria-label='Translate', v-bind='props')
					v-icon mdi-translate
			v-list
				v-list-item(v-for="(locale, index) in availableLocales", active-class='text-light-blue', @click.prevent.stop="setLocale(locale.code)", :key='locale.code')
					v-list-item-title {{ locale.name }}

		//- テーマ切り替えスイッチ
		v-btn(icon, @click="toggleTheme")
			v-icon(v-if="theme.global.current.value.dark") mdi-weather-night
			v-icon(v-else) mdi-weather-sunny

	//- ページコンテンツ
	v-main
		v-container(fluid)
			//- router-view
			slot
		CommonFooter

		//- v-btn(color='red', fab, fixed, bottom, right, aria-label='Page Top', @click="$vuetify.goTo('#inspire', {duration: 500, offset: 0, easing: 'easeOutCubic'})")
		//- 	v-icon mdi-chevron-up
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify';
import { useIndexStore } from '../store/index';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/show-language/prism-show-language';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-highlight/prism-line-highlight';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const { locale, locales, setLocale } = useI18n();
const indexStore = useIndexStore();
const theme = useTheme();
// const switchLocalePath = useSwitchLocalePath();
const drawer = ref(true);
const headMenu = reactive([
	{ title: 'header.title', icon: 'mdi-home', link: '/' },
	{ title: 'header.log', icon: 'mdi-history', link: '/updateLog' },
	{ title: 'header.login', icon: 'mdi-login', link: '/user/login' },
]);
const globalStorage = reactive({
	themeName: '',
});


// ----------------------------------------------------------------------------------------------------
// Script Initialize

async function scriptInitialize() {
	await indexStore.fetchMenuList();
	await indexStore.fetchRandomWords();
}


// ----------------------------------------------------------------------------------------------------
// Computed

const availableLocales = computed(function() {
	return locales.value.filter((i: { code: string; }) => i.code !== locale.value);
});


// ----------------------------------------------------------------------------------------------------
// Mounted

onMounted(function() {
	const themeName = localStorage.getItem('NM-themeName');
	if (themeName !== null) {
		globalStorage.themeName = themeName;
		theme.global.name.value = themeName;
	}
});


// ----------------------------------------------------------------------------------------------------
// Function List

/**
 * テーマ切り替え
 *
 * @returns {string}    テーマ切り替え先のテーマ名
 */
function toggleTheme(): string {
	theme.global.name.value = theme.global.current.value.dark ? 'themeLight' : 'themeDark';

	// ストレージ保存処理
	globalStorage.themeName = theme.global.name.value;
	localStorage.setItem('NM-themeName', globalStorage.themeName);

	return theme.global.name.value;
}


scriptInitialize();
</script>

<script lang="ts">
</script>

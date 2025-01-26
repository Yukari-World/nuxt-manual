import '@mdi/font/css/materialdesignicons.css'; // mdi-icon用
import { createVuetify, type ThemeDefinition } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export const themeDark: ThemeDefinition = {
	dark: true,
	colors: {
		primary: '#2196F3',
		secondary: '#3F51B5',
	},
};

export const themeLight: ThemeDefinition = {
	dark: false,
	colors: {
		primary: '#2196F3',
		secondary: '#3F51B5',
	},
};

export default defineNuxtPlugin(function({ vueApp }) {
	const vuetify = createVuetify({
		ssr: false,
		icons: {
			defaultSet: 'mdi',
			aliases,
			sets: {
				mdi,
			},
		},
		theme: {
			defaultTheme: 'themeDark',
			themes: {
				themeDark,
				themeLight,
			},
		},
		components,
		directives,
	});

	vueApp.use(vuetify);
});

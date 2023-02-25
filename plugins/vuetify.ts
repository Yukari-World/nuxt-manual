import '@mdi/font/css/materialdesignicons.css'; // mdi-icon用
import { createVuetify, ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export const themeDark: ThemeDefinition = {
	dark: true,
	colors: {
		primary: '#2196F3',
		secondary: '#3F51B5',
	},
};

export default defineNuxtPlugin(function({ vueApp }) {
	const vuetify = createVuetify({
		ssr: false,
		theme: {
			defaultTheme: 'themeDark',
			themes: {
				themeDark,
			},
		},
		components,
		directives,
	});

	vueApp.use(vuetify);
});

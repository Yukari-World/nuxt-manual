import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration';
import type { ThemeDefinition } from 'vuetify';

const themeDark: ThemeDefinition = {
	dark: true,
	colors: {
		primary: '#2196F3',
		secondary: '#3F51B5',
	},
};

const themeLight: ThemeDefinition = {
	dark: false,
	colors: {
		primary: '#2196F3',
		secondary: '#3F51B5',
	},
};

export default defineVuetifyConfiguration({
	// ssr: false,
	icons: {
		defaultSet: 'mdi',
		sets: [
			// mdi set is handled by the module/preset usually, but can be explicit if needed
		],
	},
	theme: {
		defaultTheme: 'themeDark',
		themes: {
			themeDark,
			themeLight,
		},
	},
});

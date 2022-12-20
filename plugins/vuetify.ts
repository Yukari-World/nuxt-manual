import '@mdi/font/css/materialdesignicons.css'; // mdi-icon用
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default defineNuxtPlugin(function({ vueApp }) {
	const vuetify = createVuetify({
		components,
		directives,
	});

	vueApp.use(vuetify);
});

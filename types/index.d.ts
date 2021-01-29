import { NuxtAxiosInstance } from '@nuxtjs/axios';

declare module 'vue/tyoes/vue' {
	interface Vue {
		$axios: NuxtAxiosInstance
	}
}

declare module '@nuxt/tyoes' {
	interface NuxtAppOptions {
		$axios: NuxtAxiosInstance
	}

	interface Context {
		$axios: NuxtAxiosInstance
	}
}

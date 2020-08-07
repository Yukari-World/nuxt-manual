import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo, {
	duration: 700,
	easing: [0, 0, 0.1, 1],
	offset: -100,
});

// export default function vueScrollTo (context, inject) {
// 	inject('scrollTo', vueScrollTo.scrollTo);
// }

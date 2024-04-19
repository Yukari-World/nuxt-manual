<template lang='pug'>
pre.line-numbers(v-if='!dataSrc', :data-download-link='dataDownloadLink', :data-line='dataLine', :class='$attrs.class')
	code
		slot
pre.line-numbers(v-else, :data-src='dataSrc', :data-download-link='dataDownloadLink', :data-line='dataLine', :class='$attrs.class')
</template>

<script setup lang="ts">
import { highlightAll } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-batch';
import 'prismjs/components/prism-apacheconf';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-http';
import 'prismjs/components/prism-ini';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-pug';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-sql';


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Property List

const props = defineProps({
	dataLine: {
		type: String,
		default: '',
	},
	dataDownloadLink: {
		type: Boolean,
		default: false,
	},
	dataSrc: {
		type: String,
		default: '',
	},
});


// ----------------------------------------------------------------------------------------------------
// Mounted

onMounted(function() {
	highlightAll();
});
</script>

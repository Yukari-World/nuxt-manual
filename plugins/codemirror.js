import Vue from 'vue';
import VueCodemirror from 'vue-codemirror';

// codemirror language
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/sass/sass.js';
import 'codemirror/mode/vue/vue.js';

// codemirror active-line.js
import 'codemirror/addon/display/fullscreen.js';

// foldGutter
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/comment-fold.js';
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/indent-fold.js';
import 'codemirror/addon/fold/markdown-fold.js';
import 'codemirror/addon/fold/xml-fold.js';

// search
import 'codemirror/addon/search/search.js';
import 'codemirror/addon/search/searchcursor.js';

import 'codemirror/addon/runmode/runmode.js';
import 'codemirror/addon/selection/active-line.js';
// more codemirror resource...

Vue.use(VueCodemirror);

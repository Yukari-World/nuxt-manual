<template lang="pug">
v-footer(padless)
	v-row.flex-column.flex-xl-row
		v-col.d-flex.align-center.justify-center.justify-xl-start
			p(style='margin: 0')
				nuxt-link(to='/randomWord/')#randomWord Loading...
		v-col.d-flex.align-center.justify-center.justify-xl-start
			p.text-center.text-xl-left
				| Page Editor, Page Design: Yukari-World
				br
				| Text Editor:&nbsp;
				a(href='https://atom.io/', title='Atom', target='_blank', rel='external noopener') Atom
				| ,&nbsp;
				a(href='https://notepad-plus-plus.org/', title='Notepad++ Home', target='_blank', rel='external noopener') Notepad++
				| ,&nbsp;
				a(href='https://code.visualstudio.com/', title='Visual Studio Code - Code Editing. Redefined', target='_blank', rel='external noopener') Visual Stdio Code
				br
				| Syntax Highlightor:&nbsp;
				a(href='https://prismjs.com/', title='Prism', target='_blank', rel='external noopener') Prism
				br
				| Coding Language: JavaScript,&nbsp;
				a(href='https://pugjs.org/', title='Pug: Getting Started', target='_blank', rel='external noopener') Pug(Jade)
				| ,&nbsp;
				a(href='http://sass-lang.com/', title='Sass: Syntactically Awesome Style Sheets', target='_blank', rel='external noopener') Sass(SCSS)
</template>

<style lang="scss">
.row {
	box-sizing: border-box;
}

#randomWord {
	text-decoration: line-through;
	color: #FFFFFF;
}
</style>

<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {
			bWordDecide: true,
			loading: true,
		};
	},
	computed: {
		// storeからのデータ読み込み
		...mapState({
			wordList: (state) => state.randomWords
		})
	},
	mounted () {
		// const animationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.setTimeout;
		this.loading = false;

		this.setrandomWord();
		// ループイベント呼び出し
		requestAnimationFrame(this.roopEvent);
	},
	methods: {
		randomInt32() {
			// XorShiftのseed起動
			this.$store.commit('randomInt32');
			const seeder = this.$store.getters.getSeed;

			return seeder.w;
		},
		randomFloat() {
			let randNumber = this.randomInt32();
			if (randNumber < 0) {
				randNumber = ~randNumber;
			}
			return randNumber / (2 ** 31 - 1);
		},
		setrandomWord() {
			// 乱数の生成
			const wordNum = Math.floor(this.randomFloat() * this.wordList.length);
			const randomWord = document.getElementById('randomWord');

			randomWord.setAttribute('v-scroll-to', "'#wordID" + (wordNum + 1) + "'");
			randomWord.setAttribute('href', '/randomWord/index#wordID' + (wordNum + 1));
			randomWord.textContent = '';
			randomWord.insertAdjacentHTML('beforeend', this.wordList[wordNum].title);
		},
		secondsInterval(seconds = 5) {
			// Initialize
			const bdate = new Date();

			if (bdate.getSeconds() % seconds === 0 && this.bWordDecide === false) {
				this.bWordDecide = true;
				this.setrandomWord();
			} else if (bdate.getSeconds() % seconds === 1 && this.bWordDecide === true) {
				this.bWordDecide = false;
			}
		},
		roopEvent() {
			this.secondsInterval(10);
			requestAnimationFrame(this.roopEvent);
		}
	}
};
</script>

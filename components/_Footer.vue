<template lang="pug">
v-footer(padless)
	v-row.ma-0.flex-column.flex-md-row
		v-col.ma-0.pb-0.d-flex.align-center.justify-center.justify-md-start(cols='6')
			p.yw-word
				nuxt-link#randomWord(:to='sLink', v-html='sFooterText')
		v-col.ma-0.pb-0.d-flex.align-center.justify-center.justify-md-start(cols='6')
			.text-center.text-md-left.yw-footer-source
				p Page Editor, Page Design: Yukari-World
				p
					| Text Editor:&nbsp;
					a(href='https://atom.io/', title='Atom', target='_blank', rel='external noopener') Atom
					| ,&nbsp;
					a(href='https://notepad-plus-plus.org/', title='Notepad++ Home', target='_blank', rel='external noopener') Notepad++
					| ,&nbsp;
					a(href='https://code.visualstudio.com/', title='Visual Studio Code - Code Editing. Redefined', target='_blank', rel='external noopener') Visual Stdio Code
				p
					| Design Framework:&nbsp;
					a(href='https://vuetifyjs.com/ja/', title='マテリアルデザインコンポーネントフレームワーク — Vuetify.js', target='_blank', rel='external noopener') Vuetify.js
				p
					| Syntax Highlightor:&nbsp;
					a(href='https://prismjs.com/', title='Prism', target='_blank', rel='external noopener') Prism
				p
					| Coding Language: JavaScript,&nbsp;
					a(href='https://pugjs.org/', title='Pug: Getting Started', target='_blank', rel='external noopener') Pug(Jade)
					| ,&nbsp;
					a(href='http://sass-lang.com/', title='Sass: Syntactically Awesome Style Sheets', target='_blank', rel='external noopener') Sass(SCSS)
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
	data() {
		return {
			bWordDecide: false,
			bLoading: true,
			sLink: '',
			sFooterText: 'Loading...',
		};
	},

	computed: {
		// storeからのデータ読み込み
		...mapState({
			wordList: (state: any) => state.randomWords,
		}),
	},

	mounted() {
		// ループイベント呼び出し
		requestAnimationFrame(this.roopEvent);
	},

	methods: {
		/**
		 * 乱数の生成
		 *
		 * @returns {number}    乱数の結果
		 */
		randomInt32(): number {
			// XorShiftのseed起動
			this.$store.commit('randomInt32');
			const seeder = this.$store.getters.getSeed;

			return seeder.w;
		},

		/**
		 * 浮動少数の乱数の生成
		 *
		 * @returns {number}    乱数の結果
		 */
		randomFloat(): number {
			let randNumber = this.randomInt32();
			if (randNumber < 0) {
				randNumber = ~randNumber;
			}
			return randNumber / (2 ** 31 - 1);
		},

		/**
		 * ランダムワードの取得
		 *
		 * 但し、格納データが0件の場合、処理を行わない
		 *
		 * @returns {boolean}
		 */
		setRandomWord(): boolean {
			// 格納データの件数の確認
			if (this.wordList.length > 0) {
				// 乱数の生成
				const wordNum = Math.floor(this.randomFloat() * this.wordList.length);

				this.sLink = '/randomWord/' + (wordNum + 1);
				this.sFooterText = this.wordList[wordNum].title;

				return true;
			}
			return false;
		},

		/**
		 * 指定時間毎に実行する
		 *
		 * 但し、初回実行時のみ時間指定を無視する
		 *
		 * @param   {number}    [seconds=5] 更新間隔(秒)
		 * @returns {void}
		 */
		secondsInterval(seconds: number = 5): void {
			// Initialize
			const bdate = new Date();

			if ((bdate.getSeconds() % seconds === 0 && this.bWordDecide === false) || this.bLoading) {
				// ランダムワードの取得
				if (this.setRandomWord()) {
					this.bWordDecide = true;
					this.bLoading = false;
				}
			} else if (bdate.getSeconds() % seconds === 1 && this.bWordDecide === true) {
				this.bWordDecide = false;
			}
		},

		/**
		 * ループイベントの呼び出し
		 *
		 * @returns {void}
		 */
		roopEvent(): void {
			this.secondsInterval(10);
			requestAnimationFrame(this.roopEvent);
		},
	},
});
</script>

<style lang="scss">
.yw-footer {
	&-source {
		p {
			margin-bottom: 0;
		}
	}
}

.yw-row {
	box-sizing: border-box;
}

.yw-word {
	margin: 0 0 0 1em;
}

#randomWord {
	color: #FFFFFF;
	text-decoration: line-through;
}
</style>

<template lang="pug">
nav#menu.sidebar
	h2.text-center Nuxt Manual Menu

	p.text-center {{ now }}

	.d-flex.justify-space-around
		v-btn#expandAll(color='secondary', small) {{ $t('sidebar.expand') }}
		v-btn#collapseAll(color='secondary', small) {{ $t('sidebar.compress') }}
	v-switch.ma-2(v-model='threeLine', :label="$t('sidebar.showDescription')")

	//- メニューの生成
	//- アイコンは https://materialdesignicons.com/ を参照
	v-list#navMenu(dense, expand, nav, subheader, :three-line='threeLine')
		v-list-subheader(v-t="'sidebar.contents'")
		v-list-group(active-class='light-blue--text', v-for='(listIndex, index) in indexStore.getMenuList', :value='$t(listIndex.category)', :key='index', :id='listIndex.category', :prepend-icon='listIndex.icon')
			template(v-slot:activator="{ props }")
				v-list-item(v-bind='props')
					v-list-item-title {{ $t(listIndex.category) }}
					v-list-item-subtitle(v-if='threeLine' v-text='listIndex.description')
			//- サブカテゴリ。templateに含ますことで不要な要素を作成させない
			template(v-for='(subIndex, i) in listIndex.subCategory')
				//- リスト行
				template(v-for='(lists, j) in subIndex.list', link)
					//- リンクは v-list-item が持つ
					//- サブカテゴリは1000足してキーの重複を回避する
					//- サブカテゴリ毎に表示方法を変える
					v-list-item(v-if='subIndex.name !== "Default"', active-class='light-blue--text', nuxt, :to="listIndex.baseURL + '/' + subIndex.url + lists.link", :title='lists.title', :key='i * 1000 + j')
						template(v-if='lists.workInProgress === true', v-slot:appendIcon)
							v-icon mdi-border-color
						v-list-item-title(v-text='"[" + $t(subIndex.name) + "] " + lists.title')
					v-list-item(v-else, active-class='light-blue--text', nuxt, :to="listIndex.baseURL + lists.link", :title='lists.title', :key='i * 1000 + j')
						template(v-if='lists.workInProgress === true', v-slot:appendIcon)
							v-icon mdi-border-color
						v-list-item-title(v-text='lists.title')
</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';

const indexStore = useIndexStore();

async function products() {
	await indexStore.fetchMenuList();
}

await products();

</script>

<script lang="ts">
// import Vue from 'vue';
// import { mapState } from 'vuex';

export default {
	name: 'CommonSidebar',

	data() {
		return {
			loading: true,
			now: '',
			threeLine: false,
			listActive: {},
			categoryList: [],
		};
	},

	computed: {
		// storeからのデータ読み込み
		// ...mapState({
		// 	categoryList: (state: any) => state.menus.categoryList,
		// }),
	},

	mounted() {
		// this.loading = false;
		// this.now = this.$dayjs().format('L LTS');

		// // ループイベント呼び出し
		// requestAnimationFrame(this.roopEvent);
	},

	methods: {
		// /**
		//  * ループイベントの呼び出し
		//  * @returns {void}
		//  */
		// roopEvent(): void {
		// 	this.now = this.$dayjs().format('L LTS');
		// 	requestAnimationFrame(this.roopEvent);
		// },
	},
};
</script>

<style lang="scss">
// ----------------------------------------------------------------------------------------------------
// Vender Profile Initialize
.v-navigation-drawer {
	// Vender Profile Initialize
	::-webkit-scrollbar {
		width: 5px;
		height: 5px;
		background-color: transparent;
	}
}
</style>

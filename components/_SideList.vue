<template lang="pug">
nav#menu.sidebar
	h2 Nuxt Manual Menu

	.d-flex.justify-space-around
		v-btn#expandAll(color='primary', small) 全て展開
		v-btn#collapseAll(color='primary', small) 全て折りたたむ
	v-switch(v-model='threeLine' class='ma-2' label='概要表示')

	template(v-if='loading')
		- for (var i = 0; i < 15; i++)
			v-skeleton-loader(type='list-item')
	v-list#navMenu(v-else, dense, expand, nav, :three-line='threeLine')
		v-list-group(active-class='light-blue--text', v-for='(listIndex, index) in categoryList', :key='index')
			template(v-slot:activator)
				v-list-item(:title='listIndex.category')
					//- アイコンは https://materialdesignicons.com/ を参照
					v-list-item-icon
						v-icon {{listIndex.icon}}
					v-list-item-content
						v-list-item-title {{listIndex.category}}
						v-list-item-subtitle(v-if='threeLine' v-html='listIndex.description')
			//- サブカテゴリ。templateに含ますことで不要な要素を作成させない
			template(v-for='(subIndex, i) in listIndex.subCategory')
				//- リスト行
				template(v-for='(lists, j) in subIndex.list', link)
					//- リンクは v-list-item が持つ
					//- サブカテゴリは1000足してキーの重複を回避する
					v-list-item(active-class='light-blue--text', nuxt, :to='listIndex.baseURL + lists.link', :title='lists.title', :key='i * 1000 + j')
						v-list-item-content
							//- サブカテゴリ毎に表示方法を変える
							template(v-if='subIndex.name !== "Default"')
								v-list-item-title(v-text='"[" + subIndex.name + "] " + lists.title')
							template(v-else)
								v-list-item-title(v-text='lists.title')
						template(v-if='lists.workInProgress === true')
							v-list-item-icon
									v-icon mdi-border-color
</template>

<style lang="scss">
.v-navigation-drawer {
	// Vender Profile Initialize
	::-webkit-scrollbar {
		width: 5px;
		height: 5px;
		background-color: transparent;
	}
}
</style>

<script>
import { mapState } from 'vuex';

export default {
	data() {
		return {
			loading: true,
			threeLine: false
		};
	},
	computed: {
		// storeからのデータ読み込み
		...mapState({
			categoryList: (state) => state.menus.categoryList
		})
	},
	mounted () {
		this.loading = false;
	}
};
</script>

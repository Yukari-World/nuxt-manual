<template lang="pug">
div
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
		v-list-group(v-for="(listIndex, index) in menuList", active-class='text-light-blue', :id='listIndex.category', :value='$t(listIndex.category)', :prepend-icon='listIndex.icon', :key='index')
			template(v-slot:activator="{ isOpen, props }")
				v-list-item(v-bind='props')
					v-list-item-title {{ $t(listIndex.category) }}
					v-list-item-subtitle(v-if='threeLine' v-text='listIndex.description')
			//- サブカテゴリ。templateに含ますことで不要な要素を作成させない
			template(v-for="(subIndex, i) in listIndex.subCategory")
				//- リスト行
				template(v-for="(lists, j) in subIndex.list")
					//- リンクは v-list-item が持つ
					//- サブカテゴリは1000足してキーの重複を回避する
					//- サブカテゴリ毎に表示方法を変える
					template(v-if="subIndex.name !== 'Default'")
						v-list-item(active-class='text-light-blue', nuxt, :to="listIndex.baseURL + subIndex.url + lists.link", :key='i * 1000 + j')
							template(v-if="lists.workInProgress === true", v-slot:append)
								v-icon(icon='mdi-border-color')
							v-list-item-title(v-text="'[' + $t(subIndex.name) + '] ' + lists.title", :title="lists.title")
					template(v-else)
						v-list-item(active-class='text-light-blue', nuxt, :to="listIndex.baseURL + lists.link", :key='i * 1000 + j')
							template(v-if="lists.workInProgress === true", v-slot:append)
								v-icon(icon='mdi-border-color')
							v-list-item-title(v-text='lists.title', :title="lists.title")
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const indexStore = useIndexStore();

const threeLine = ref(false);
const now = ref('');


// ----------------------------------------------------------------------------------------------------
// Computed

const menuList = computed(function() {
	return indexStore.getMenuList;
});


// ----------------------------------------------------------------------------------------------------
// Mounted

onMounted(function() {
	dayjs.extend(LocalizedFormat);
	dayjs.locale('ja');
	roopEvent();
});


// ----------------------------------------------------------------------------------------------------
// Function List

/**
 * ループイベントの呼び出し
 *
 * @returns {void}
 */
function roopEvent(): void {
	now.value = dayjs().format('L LTS');
	requestAnimationFrame(roopEvent);
}
</script>

<script lang="ts">
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

.yw-sidebar {
	// ----------------------------------------------------------------------------------------------------
	// Vuetify Overwrite

	.v-list-item {
		&__prepend {
			> .v-icon {
				margin-inline-end: 16px;
			}
		}

		&__append {
			> .v-icon {
				margin-inline-start: 0;
			}
		}
	}

	h2 {
		font-size: 1.5rem;
	}
}
</style>

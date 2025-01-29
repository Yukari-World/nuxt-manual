<template lang="pug">
.category--docker.page--mailpit
	v-alert(type="info", border="start", colored-border, dense, elevation="5", :title="$t('common.stub.workInProgress.title')", :text="$t('common.stub.workInProgress.desc')")

	section
		h2 Mailpitとは?
		p Mailpitとは、Dockerで使用できる開発用仮想メールサーバーライブラリの一つである。元々Mailhogというメールサーバーライブラリが存在していたが、今となっては古く、遅いため、再開発されたライブラリである。
		p 今回は、Docker Composeを利用する方法にて記述する。

	section
		h2 使用方法と解説

		h3 Docker Composeへの記述
		p
			| docker-copose.ymlへは以下の様に記述する。
			br
			| ポートの設定は各開発環境に応じて合わせること。
		pre.language-yaml.line-numbers: code {{ CB1 }}

		h3 利用ソフト側の設定
		p
			| 今回はPHP:Apatcheで使用することを想定する。
			br
			| mailpit.iniというファイルを作成し、以下の様に記述する。
			br
			| 今回の例では、上記で記述した内容通りであるものとして、ホスト名はmail、ポートは1025であるものとする。
		pre.language-ini.line-numbers: code.
			[mail function]
			sendmail_path="/usr/local/bin/mailpit sendmail -S mail:1025"
</template>

<script setup lang="ts">
import { highlightAll } from 'prismjs';
import { useIndexStore } from '@/store/index';
import 'prismjs/components/prism-ini';
import 'prismjs/components/prism-yaml';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'Mailpit' });
const indexStore = useIndexStore();

const CB1 = `  mail: # ここに記述した名前がホスト名になる
    container_name: mail-mailpit # 格納するコンテナ名。これは無くてもいい
    image: axllent/mailpit:latest
    ports:
    - 1025:1025 # メール送信に使うポート
    - 8025:8025 # メールサーバー表示に使うポート
`;


// ----------------------------------------------------------------------------------------------------
// Header Data

useHead({
	title: header.title,
});


// ----------------------------------------------------------------------------------------------------
// Mounted

onMounted(function() {
	highlightAll();
	indexStore.setTitle(header.title);
});
</script>

<script lang="ts">
</script>

<template lang="pug">
.category--other.sub--xampp.page--local-network
	AlartStub

	section
		h2 説明
		p XAMPPにインストールされているApacheは、デフォルトではネットワークに接続されている機器から閲覧する事が出来ない。しかし、設定を変更することでローカルネットワークに接続されている機器から閲覧する事が出来るようになる。

	section
		h2 設定手順
		p ※予めローカルIPアドレスの固定化を行うこと。
		ol
			li
				p httpd.confファイルを開き以下の内容を検索する。
				BlockCode.language-apacheconf: pre.
					ServerName localhost:80
				p ※デフォルト値。既に変更済みの場合、この値通りでない可能性がある。

			li
				p この内容を以下の内容に書き換える
				BlockCode.language-apacheconf: pre.
					ServerName 192.168.24.10:80

				p
					| ※IPアドレスは一例であり、実際には固定したローカルIPアドレスを入力する事。
					br
					| ※右の80はポート番号である。

	section
		h2 使用上の注意
		ul
			li ローカルIPの固定が必要なので、IPアドレスの重複には注意が必要。DHCPサーバー側で固定することで確実に固定する事が出来る。
			li localhost及び127.0.0.1が使えなくなるわけではない。
			li
				p
					| ファイアウォールの設定を問われる事があるが、その場合ブロックを解除する事。
					br
					| Apacheを使う場合は、『Apache HTTP Server』、Node.jsの場合は『Node.js Server-side JavaScript』が有効になっているか要確認。

	section
		h2 参考リンク
		a(href='http://weble.org/2009/11/28/xampp-intranet', target='_blank', rel='external noopener') XAMPP にイントラネット内 (LAN 内) のPC から接続する設定 | ウェブル

</template>

<script setup lang="ts">
import { useIndexStore } from '@/store/index';


// ----------------------------------------------------------------------------------------------------
// Data Initialize

const header = reactive({ title: 'ローカルネットワーク接続' });
const indexStore = useIndexStore();


// ----------------------------------------------------------------------------------------------------
// Header Data

useHead({
	title: header.title,
});


// ----------------------------------------------------------------------------------------------------
// Mounted

onMounted(function() {
	indexStore.setTitle(header.title);
});
</script>

<script lang="ts">
</script>

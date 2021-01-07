# Nuxt Manual
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Yukari-World/nuxt-manual.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Yukari-World/nuxt-manual/context:javascript)
[![Netlify Status](https://api.netlify.com/api/v1/badges/edb34a32-c688-4a49-b48e-eb3a85f5e98b/deploy-status)](https://app.netlify.com/sites/nuxt-technical-manual/deploys)

Nuxtで作成された主にHTML関係の小さな技術マニュアル

## What's Nuxt Manual?
### 概要
Nuxt ManualはHTMLで作成したページを基にNuxtで移植、再作成したページです。
主にHTML関連の技術がメインとなっています。

ソースコードのハイライトには[Prism](https://prismjs.com/)を使用し、ソースを素早くコピー可能にしたうえで、プレビュー機能による詳細をわかりやすく表示します。

### 機能面の変化
HTML版との差異は基本時にありませんが、Nuxt版は技術開発の確立に遅れが生じているので機能の追加等に遅れがあります。

### :pencil: マニュアルの参考元
マニュアルの作成時に参考としたページは、各ページの末尾にリンクを貼っています。

尚、現在はまだ発生していませんが、デッドリンクが発生した場合、アーカイブに飛ぶように修正します。

### :bug: 誤字、脱字、修正等について
万が一ありましたらissueに登録してください。
確認をした後、修正を行います。

尚、issueテンプレートは現在未作成です。

### :globe_with_meridians: 本ページの公開先について
このソースで作成されたページは[Netlify](https://www.netlify.com/)にて公開されています。

### 正直Qiitaでよくない?
本マニュアルはあくまでNuxtの技術習得を目的としたものなので、マニュアル自体は備忘録程度のおまけです。

## 動作について
このサイトの動作にはNode.jsを使用していますので、あらかじめインストールしておいてください。
尚、Node.jsの基本的な使い方はこちらでは省略します。

このソースをクローンして使用する場合、ローカルで動作させるにはプロジェクトルートディレクトリに.envファイルを作成する必要があります。
これはBASE_URLを本番サーバーとしている関係で、一部の要素で正常に動作しないためです。

また、このサイトはFirebaseを使用しています。
Firebaseの設定項目はセキュリティの都合でGitにアップロードしていないので各自用意してください。

.envファイルの作成例は以下の通りです。
```
BASE_URL="http://localhost:8080/"

APIKEY=
AUTHDOMAIN=
DATABASEURL=
PROJECTID=
STORAGEBUCKET=
APPID=
MESSAGINGSENDERID=
```

## 記録
このソースコードは、2020年ソースコード保管プロジェクトにてノルウェーの永久凍土に保管されたようです。

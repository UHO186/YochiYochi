# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## YochiYochi

作業内容
---
1. フロントを全般的に担当しました。
2. 複数の幼児用ゲームを制作しました。
3. 掲示板, ログイン, 会員登録ページを担当しました

難しかったこと & 乗り越えたこと
---
1. Commponentを分けるのが難しかったです。私は最初に作る時一つのCommponentを色んなところに使おうと思いました。掲示板, ログイン, 会員登録に一つのCommponentを使えるように様々な工夫をしてpropsの数を増やしてステータスを減らして
   作業を行いました。結果よりCommponentは管理しやすくなりpropsだけを調整するだけで用意ステータスを変えることが可能になりました。
2. QnaとCommunity掲示板を作る時同じCommponentで作るのが大変でした。QnaとCommunity掲示板の仕組みは同じだけど異なるステータスを一々管理することが難しかったです。それでpropsとvue.js文法でなるべくたくさんオプションをつけて
   一つCommponentで管理することが可能になりますた。

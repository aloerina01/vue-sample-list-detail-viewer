# vue-sample-list-detail-viewer

Vue + Vuex の設計パターン検証のためのサンプルプロジェクト。

### 解決したいこと

1. Vuex の mapHelper を使うことで Component にプロパティが増え、可読性が落ちること
2. プロパティが Component に定義されたものなのか、 mapHelper によって定義されたものなのかが分かりにくいこと
3. Vuex の getters へアクセスする際、「どの Store(Module) の値にアクセスしているか」が分かりにくいこと
4. Component 層 と Store 層の間にビジネスロジック層が存在しないこと
5. Component と Store が　 Action を通じて密結合なこと

### 設計方針

- CQS (Command Query Separation) の方針を採用する
- mapHelper を原則使用禁止する
- Store の値にアクセスするときは、 Getters の代わりに、 Store(Module) ごとに用意した Query を利用する
- Store を更新するときは、 dispatch 関数を通じて Flux 的に更新する(すべての Store に ActionType を通知する)
- dispatch 関数を呼び出す処理は、ビジネスロジック層である Command にて行う
- Component は Query を通じてデータを取得し表示し、 Command を通じて処理を行い Store を更新する

### 借り物

- Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

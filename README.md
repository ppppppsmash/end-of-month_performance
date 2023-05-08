# 稼動実績報告書_稼動時間を計算してくれるSPAアプリ

いつもの月末処理の稼動実績報告書に対して、各プロジェクトにかかった時間をパーセンテージとグラフに変換してくれる処理。

最終目標：これを使ったら月末処理が楽になることです。

## 初期設定

```
cd [プロジェクト]

docker-compose build
docker-compose up -d
docker-compose exec client bash
npm i
```

### 開発環境を起動

```
clientコンテナにいた上で、
（docker-compose exec client bash）
npm run dev
を実行

http://localhost:4500

互換性やデバイスによりnpm iを実行した時にエラーを回避するため、
react環境をローカルではなくコンテナの中に実行させる
```
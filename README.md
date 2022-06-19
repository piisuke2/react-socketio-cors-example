# react-socketio-cors-example

Reactで作成したコンポーネントを外部サイトに埋め込んでSocketIOで通信するサンプル

* site-a: コンポーネントを配布するサイト
* site-b: 埋め込み先のサイト

## build client

    cd site-a/client
    npm i
    npm run build

## start site-a server

    cd site-a/server
    npm i
    npm start

## start site-b server

    cd site-b/server
    npm i
    npm start

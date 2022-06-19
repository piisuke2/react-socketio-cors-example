
const express = require('express')
const app = express()
const port = 3001

// socket.io
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  // TIPS: site-bからのcorsを許可
  cors: {
    origin: "http://localhost:3002",
    methods: ["GET", "POST"],
    credentials: true
  }
});
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

setInterval(() => {
  io.emit('serverTime', new Date().toString());
}, 1000);

// TIPS: react-app.jsでreactのjsファイルをダウンロードできるようにする
const glob = require('glob');
const path = require('path');
let jsFilePath;
glob('build/static/js/main.*.js', function (err, files) {
  if (err) {
    console.log(err);
  }
  console.log(files);
  jsFilePath = files[0];
});
app.get('/react-app.js', (req, res) => {
  // TIPS: ファイル名が固定になるのでキャッシュ無効にする
  res.header('Cache-Control', ['private', 'no-store', 'no-cache', 'must-revalidate', 'proxy-revalidate'].join(','));
  res.header('no-cache', 'Set-Cookie');
  res.header('Pragma', 'no-cache');
  res.sendFile(path.join(__dirname, jsFilePath));
});

app.use(express.static('build'));
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

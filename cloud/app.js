// 在 Cloud code 里初始化 Express 框架
var express = require('express');
var wechat = require('wechat-enterprise');
var config = require('cloud/config.js');

var app = express();

// App 全局配置
app.use(express.bodyParser());    // 读取请求 body 的中间件

APPID = AV.applicationId; // 你的应用 id
MASTER_KEY = AV.masterKey; //你的应用 master key

app.use('/corp', wechat(config, function (req, res, next) {
  res.writeHead(200);
  res.end('hello node api');
}));

app.listen();

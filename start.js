const express = require('express'),
  helmet = require('helmet'),
  compression = require('compression'),
  app = express(),
  http = require('http'),
  {MyLibrary} = require('./build/server'),
  getTemplate = require('./master'),
  path = require('path'),
  server = http.createServer(app),
  favicon = require('serve-favicon');

app.use(helmet());
app.use(compression());
app.use(favicon(path.join(__dirname, 'favicon.ico')));

app.use('/build', express.static(path.join(__dirname, 'build')));
app.use('/fonts', express.static(path.join(__dirname, 'fonts')));

app.get('/test', (req, res) => {
  console.log('"/test" browser render');
  let {html, stores} = MyLibrary.render(req);
  res.send(getTemplate({html, stores}));
});

app.get('*', (req, res) => {
  let ua = req.headers['user-agent'];
  if (/bot|google|yandex|mail\.ru|bing|embedly|guzzlehttp|validator|vk\.com|facebook|slurp|tumblr|undefined|seopult|mailru|mrpc|ok\.ru|googlebot|bingbot|baiduspider|twitterbot|facebookexternalhit|rogerbot|linkedinbot|quora link preview|showyoubot|outbrain|pinterest\/0\.|pinterestbot|slackbot|vkShare|W3C_Validator|whatsapp/i.test(ua)) {
    let html = MyLibrary.render(req.url);
    console.log('"/" server render');
    res.send(getTemplate({html})).end();
  } else {
    console.log('"/" browser render');
    res.send(getTemplate())
  }
});

app.use(function (req, res, next) {
  console.error("сработало 404");
  res.sendStatus(404)//.redirect('/error?url=' + req.url);
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  console.error(err.stack);
  err.userMessage = err.userMessage || 'На сервере произошла ошибка';
  if (res.status() < 500)
    res.status(500);
  res.send(err.userMessage);
});

server.listen(3000, function () {
  console.log(`Приложение запущено http://localhost:3000`);
});
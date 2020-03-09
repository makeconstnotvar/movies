const express = require('express'),
  helmet = require('helmet'),
  compression = require('compression'),
  app = express(),
  http = require('http'),
  path = require('path'),
  server = http.createServer(app);

app.use(helmet());
app.use(compression());

app.use('/build', express.static(path.join(__dirname, 'build')));

app.use('/', (req, res, next) => {
  res.sendFile('index.html', {root: __dirname})
});

server.listen(3000, function () {
  console.log(`Приложение запущено http://localhost:3000`);
});
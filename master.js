function getTemplate(props = {}) {
  return `
<!DOCTYPE html>
<html>

<head>
  <base href="/">
  <title>React Movies</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=0.3, width=device-width">
  <link rel="stylesheet" href="/build/styles.css">
  <link rel="stylesheet" href="/build/fonts.css">
  <script>window.STORES=${props.stores}</script>
</head>

<body>
<div id="root">${props.html ? props.html : 'Загрузка...'}</div>
<script src="/build/script.js"></script>

</body>

</html>
`;
}

module.exports = getTemplate;
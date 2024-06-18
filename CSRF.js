const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');

const app = express();

// Middleware за работа с формуляри и бисквитки
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Настройка на CSRF защитата
const csrfProtection = csurf({ cookie: true });

app.get('/form', csrfProtection, (req, res) => {
  // Генериране на CSRF токен и вграждане във формуляра
  res.send(`
    <form action="/process" method="POST">
      <input type="hidden" name="_csrf" value="${req.csrfToken()}">
      <input type="text" name="data">
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/process', csrfProtection, (req, res) => {
  // Обработка на данните от формуляра
  res.send('Data is being processed');
});

// Стартиране на сървъра
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

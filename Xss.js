const express = require('express');
const bodyParser = require('body-parser');
const { escape } = require('lodash');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Маршрут за коментари
app.post('/comment', (req, res) => {
  const userComment = req.body.comment || '';
  const safeComment = escape(userComment);  // Предотвратяване на XSS чрез екранни символи
  res.send(`Comment received: ${safeComment}`);
});

// Стартиране на сървъра
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

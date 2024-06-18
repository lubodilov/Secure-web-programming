const express = require('express');
const app = express();

// Регулярни изрази за откриване на SQL инжекции
const SQL_PATTERNS = [
  /(\%27)|(\')|(\-\-)|(\%23)|(#)/i,
  /\b(OR|AND)\b\s+\d+\s*=\s*\d+/i
];

// Функция за проверка на SQL инжекции
function isSqlInjection(query) {
  return SQL_PATTERNS.some(pattern => pattern.test(query));
}

// Маршрут за търсене
app.get('/search', (req, res) => {
  const query = req.query.query || '';
  if (isSqlInjection(query)) {
    return res.status(403).send('Forbidden');
  }
  res.send(`Search results for: ${query}`);
});

// Стартиране на сървъра
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

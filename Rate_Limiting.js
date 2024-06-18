const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

// Настройка на rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минути
  max: 100, // Ограничаване до 100 заявки на IP за 15 минути
  message: 'Too many requests from this IP, please try again later.'
});

// Приложение на rate limiting към всички маршрути
app.use(limiter);

app.get('/', (req, res) => {
  res.send('Welcome to the secured server!');
});

// Стартиране на сървъра
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

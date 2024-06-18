const axios = require('axios');

const sendRequests = async () => {
  for (let i = 0; i < 150; i++) { // Опит за изпращане на 150 заявки
    try {
      const response = await axios.get('http://localhost:3000/');
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }
};

sendRequests();

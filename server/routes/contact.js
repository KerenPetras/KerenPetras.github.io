const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    await axios.post('https://formspree.io/your-formspree-email', { name, email, phone, message });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

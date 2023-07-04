const express = require('express');
const cors = require('cors')
const axios = require('axios');
const app = express();
const port = 3000; 

app.use(cors())
app.get('/', async (req, res) => {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke')
    const joke = response.data
    res.json(joke)
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


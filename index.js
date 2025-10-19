const express = require('express');
const start = require('./db.config.js');
const user = require('./routes/user.js');

require('dotenv').config();

const PORT = process.env.PORT ;

start();

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', user);

app.listen(PORT, () => {
  console.log(`Server listening on port changed new${PORT}`);
}); 


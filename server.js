const express = require('express');
const app = express();
const path = require('path');

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, reponse, next) => {
  console.log('DataTime:', new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'sunsets')));
app.use(function (req, res, next) {
  res.status(404).send("Sorry eh, can't find the correct page buddy")
})


app.get('/', (request, response) => {
 
});

app.get('/json', (request, response) => {
  response.status(200).json({"name": "Norman"});
});

app.get('/sunsets', (request, response) => {
  response.status(200).sendFile(path.join(__dirname, 'public', 'sunsets/index.html'))
});





app.listen(3000, () => {
  console.log('Express Intro running on Localhost:3000');
});



const express = require('express');
const bodyParser = require('body-parser');
const mid = require('./middleware');
const morgan = require('morgan');

let app = express();


app.use(morgan('combined'));



app.use(mid('User'));




app.get('/hello', (request, response) => {
    response.send(`Hello ${request.user.name}`)
});

app.listen(3000);
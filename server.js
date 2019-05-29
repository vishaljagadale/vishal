const express = require('express');
//const bodyParser = require('body-parser');
//const productRouter = require('./server');

const app = express();


//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
//app.use(productRouter);

app.listen(3434, '0.0.0.0', () => {
    console.log('server started on port 3434');
})
  
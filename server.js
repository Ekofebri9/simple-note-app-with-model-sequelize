const express = require('express');
const bodyParser = require('body-parser');
const application = express();
const router = require('./route');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3002;


application.use(cors()); //simple use CORS
let org=['http://192.168.6.195','http://192.168.100.67:3002', 'http://localhost:3002'];
var corsOptions = {
    origin: function (origin, callback) {
        if (org.indexOf(origin) !== -1) {
          callback(null, true)
        } else {
          callback(new Error('Not allowed by CORS'))
        }
      },
    credentials: true,
    methods:['GET', 'PUT', 'PATCH', 'POST', 'DELETE']
  };
//application.use(cors(corsOptions)); //simple use CORS

application.use(
    function logOriginalUrl (req, res, next) {
    console.log('Request URL:', req.originalUrl);
    console.log('Request Type:', req.method);
    console.log('port', port);
    next();
  }
);

application.use(bodyParser.urlencoded({
    extended: true,
    })
);

application.use(bodyParser.json());

router(application);

application.listen(port);
console.log('lets begin...!');
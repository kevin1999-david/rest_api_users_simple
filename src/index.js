const express = require('express');
const app = express();
const routes = require('./routes/index');
const port = 3000;
//Middleware for JSON
app.use(express.json());
//Middleware for form data
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.listen(port);

console.log('Server on port: ', port);
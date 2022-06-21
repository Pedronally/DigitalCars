const express = require("express");
const router = require('./public/routes/mainRouter');
const path = require("path");
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/',router);



app.listen(3050, () => console.log("Tamo Activo"));

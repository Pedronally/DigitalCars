const express = require("express");
const app = express();
const router = require('./routes/mainRouter');
const path = require("path");


app.use(express.static('public'));


app.set('view engine', 'ejs');

app.set('views',path.join(__dirname, './views'));


app.use('/',router);



app.listen(3050, () => console.log("Tamo Activo"));



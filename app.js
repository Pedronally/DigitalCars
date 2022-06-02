
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(dirname, './views/index.html'))
});


app.get('/detalleDeProducto.html', (req, res) => {
    res.sendFile(path.join(dirname, './views/'))
});


app.get('/', (req, res) => {
    res.sendFile(path.join(dirname, './views/.html'))
});


app.get('/', (req, res) => {
    res.sendFile(path.join(dirname, './views/.html'))
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/.html'))
});

app.listen(3050, () => console.log("Tamo Activo"));
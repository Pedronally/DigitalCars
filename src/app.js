const express = require("express");
const app = express();
const router = require('./routes/mainRouter');
const indexRouter = require('./routes/index');
const path = require("path");
const logger = require('morgan');
const methodOverride = require('method-override');
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const productRouter = require('./routes/productRouter');
const usersApi = require('./routes/usersApi');
const productApi = require('./routes/productApi')



app.use(logger('dev'))

app.use(methodOverride('_method'))

app.use(express.json())

app.use(express.urlencoded({ extended: false }));

app.use('/', router)

app.use('/', indexRouter)

app.use('/user', userRouter)

app.use('/admin', adminRouter)

app.use('/productos', productRouter)

app.use('/api/users', usersApi)

app.use('/api/productos', productApi)

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.set('views',path.join(__dirname, './views'));

app.listen(3050, () => console.log("Tamo Activo"));



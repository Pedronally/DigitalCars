const express = require('express')
const viewRoutes = require('./views/views.routes')
const productRoutes = require('./api/products.routes')
const userRoutes = require('./api/users.routes')

const router = express.Router()

router.get('/ping', async(req, res) => {
    res.send('Pong')
})

router.use('/', viewRoutes)
.use('/api', productRoutes)
.use('/api', userRoutes)

module.exports = router

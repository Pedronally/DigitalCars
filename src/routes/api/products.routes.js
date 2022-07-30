const express = require('express')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs');
var data = fs.readFileSync(__dirname + '/../../data/productos.json');

const jsonProducts = JSON.parse(data)

const router = express.Router()

router.get('/health', async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            health: 'Up'
        })
    } catch (err) {
        console.error(err)
        return res.status(500).send(`Interanal server error ${err.message}`)
    }
})

router.get('/products', async (req, res) => {
    try {
        res.status(200).json(jsonProducts)
    } catch (err) {
        console.error(err)
        return res.status(500).send(`Interanal server error ${err.message}`)
    }
})

router.get('/products/:productId', async (req, res) => {
    try {
        const { productId } = req.params
        if (!productId) {
            return res.status(400).send('Bad request')
        }
        const productReg = await jsonProducts.filter(i => i.id == productId)
        res.status(200).json(productReg[0])
    } catch (err) {
        console.error(err)
        return res.status(500).send(`Interanal server error ${err.message}`)
    }
})

router.post('/products', async (req, res) => {
    try {
        const { body } = req
        if (!body) {
            return res.status(400).send('Bad request')
        }
        if (!body.id) {
            Object.assign(body, {
                id: uuidv4()
            })
        }
        jsonProducts.push(body)
        var newData = JSON.stringify(jsonProducts);
        fs.writeFile(__dirname + '/../../data/productos.json', newData, err => {
            if (err) return res.status(500).send(`Interanal server error ${err.message}`)
            res.status(200).send("New data added");
        });
    } catch (err) {
        console.error(err)
        return res.status(500).send(`Interanal server error ${err.message}`)
    }
})

router.put('/products/:productId', async (req, res) => {
    try {
        const { productId } = req.params
        const { body } = req
        if (!productId) {
            return res.status(400).send('Bad request')
        }
        const editJsonProducts = await jsonProducts.map(i => {
            if (i.id != productId) {
                return i
            }
            return {
                id: productId,
                modelo: body.modelo,
                precio: body.precio,
                color: body.color,
                motor: body.motor
            }
        })
        var newData = JSON.stringify(editJsonProducts);
        fs.writeFile(__dirname + '/../../data/productos.json', newData, err => {
            if (err) return res.status(500).send(`Interanal server error ${err.message}`)
            res.status(200).send("New data added");
        });
    } catch (err) {
        console.error(err)
        return res.status(500).send(`Interanal server error ${err.message}`)
    }
})

router.delete('/products/:productId', async (req, res) => {
    try {
        const { productId } = req.params
        if (!productId) {
            return res.status(400).send('Bad request')
        }
        const productRegs = await jsonProducts.filter(i => i.id != productId)
        var newData = JSON.stringify(productRegs);
        fs.writeFile(__dirname + '/../../data/productos.json', newData, err => {
            if (err) return res.status(500).send(`Interanal server error ${err.message}`)
            res.status(200).send("Data deleted");
        });
    } catch (err) {
        console.error(err)
        return res.status(500).send(`Interanal server error ${err.message}`)
    }
})

module.exports = router
const express = require('express')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs');
const bcrypt = require('bcrypt');

var data = fs.readFileSync(__dirname + '/../../data/users.json');

const jsonUsers = JSON.parse(data)

const saltRounds = 10;

const router = express.Router()

router.post('/users', async (req, res) => {
    try {
        const { body } = req
        if (!body.id) {
            Object.assign(body, {
                id: uuidv4()
            })
        }
        const passwordHashed = await bcrypt.hash(body.password, saltRounds)
        const newUser = {
            id: body.id,
            ayn: body.completeName,
            fdn: body.birthdate,
            mail: body.email,
            password: passwordHashed,
            tipodeusuario: "1"
        }
        jsonUsers.push(newUser)
        var newData = JSON.stringify(jsonUsers);
        fs.writeFile(__dirname + '/../../data/users.json', newData, err => {
            if (err) return res.status(500).send(`Interanal server error ${err.message}`)
            res.status(200).send(`User ${body.completeName} was added`);
        });
    } catch (err) {
        console.error(err)
        res.status(500).json(`Internal server error: ${err.message}`)
    }
})

module.exports = router
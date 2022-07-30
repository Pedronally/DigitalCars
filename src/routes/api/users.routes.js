const express = require('express')
const multer = require("multer");
const fs = require('fs-extra')

const uploadFolder = __dirname + '/uploads'

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, uploadFolder)
    },
    filename: (_req, _file, cb) => {
        const filename = _file.originalname.replace(/\s/g, '-');
        cb(null, filename)
    }
})

const upload = multer({
    storage
})


const router = express.Router()


router.post('/users', async(req, res) => {
    try{    
        console.log(req)
        res.end('ok')
    }catch(err){
        console.error(err)
        res.status(500).json(`Internal server error: ${err.message}`)
    }
})

module.exports = router
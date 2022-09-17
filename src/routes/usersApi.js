const express = require('express')
const router = express.Router();
const usersApiController = require('../controllers/userApiController');

router.get('lista', usersApiController.lista)

module.exports = router;

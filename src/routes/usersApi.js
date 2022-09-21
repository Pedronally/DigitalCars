const express = require('express')
const router = express.Router();
const usersApiController = require('../controllers/userApiController');

router.get('/', usersApiController.lista)

module.exports = router;

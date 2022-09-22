const express = require('express')
const router = express.Router();
const usersApiController = require('../controllers/userApiController');

router.get('/', usersApiController.lista)
router.get('/:id', usersApiController.detail)

module.exports = router;

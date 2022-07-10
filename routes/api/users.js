const { Router } = require('express')
const router = Router()
const usersApiController = require('../../controllers/api/usersApiController')

router.get('/users', usersApiController.list)

module.exports = router
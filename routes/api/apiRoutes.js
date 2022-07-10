const { Router } = require('express')
const router = Router()
const apiUsers = require('../api/users')

router.use(apiUsers)

module.exports = router
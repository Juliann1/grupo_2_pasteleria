const { Router } = require('express')
const router = Router()
const apiUsers = require('../api/users')
const apiProducts = require('../api/products')

router.use(apiUsers)
router.use(apiProducts)

module.exports = router
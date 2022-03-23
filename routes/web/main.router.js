const { Router } = require('express')
const router = new Router()

router.get('/', (req, res) => { res.render('HomePage') })

router.get('/test', (req, res) => { res.render('TestPage') })

module.exports = router

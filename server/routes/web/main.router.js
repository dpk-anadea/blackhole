const { Router } = require('express')
const router = new Router()
const path = require('path')

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../dist/index.html'))
})

// router.get('/', (req, res) => { res.render('home-page') })

// router.get('/test', (req, res) => { res.render('test-page') })

module.exports = router

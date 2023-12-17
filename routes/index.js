const express = require('express')

const router = express.Router()

router.get('/', (req, res)=>
    res.render('welcome', { title: 'Welcome' })
)
router.get('/about', (req, res)=> 
    res.render('about', { title : 'About' })
)
router.get('/dashboard', (req, res)=> 
    res.render('dashboard', { title : 'Dashboard' })
)

module.exports = router
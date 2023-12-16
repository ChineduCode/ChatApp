const express = require('express')

const router = express.Router()

//Register Page
router.get('/register', (req, res)=>
    res.render('register', { title: 'Register User' })
)

//Login Page
router.get('/login', (req, res)=> 
    res.render('login', { title : 'Login User' })
)

module.exports = router
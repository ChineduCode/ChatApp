const express = require('express')

const router = express.Router()

//Register Page
router.get('/register', (req, res)=> {
    res.render('register', { 
        title: 'Register User',
        layout: '../views/layouts/users'
    })
})

//Login Page
router.get('/login', (req, res)=> 
    res.render('login', { title : 'Login User' })
)

router.get('/me', (req, res)=> 
    res.render('dashboard', {title: 'Dashboard'})
)

//Register User
router.post('/register', (req, res)=> {
    const { username, email, password, confirmPassword } = req.body
    let errors = [];
    //validate the input
    if(!username || !email || !password || !confirmPassword){
        errors.push({msg: 'Please fill all fields'})
    }

    if((username || email || password || confirmPassword) && (username || email || password || confirmPassword).includes('<script>')){
        errors.push({msg: 'syntax used is not allowed'})
    }

    if(email && !email.includes('@')){
        errors.push({msg: 'email is not valid'})
    }

    if(password && password.length < 7){
        errors.push({msg: 'Passwords must contain minimum of 8 characters'})
    }

    if(confirmPassword && confirmPassword !== password){
        errors.push({msg: 'Passwords do not match'})
    }

    if(errors.length > 0){
        res.status(400)
        res.render('register', {
            title: 'Register',
            errors,
            username,
            email,
            password,
            confirmPassword
        })
        
    }else{
        res.redirect('/users/login')
    }
})

module.exports = router
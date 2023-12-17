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

    if(errors.length > 0){
        console.log(errors)
        res.render('register', {
            title: 'Register',
            username,
            email,
            password,
            confirmPassword
        })
        
    }else{
        res.send('Successful')
    }
})

module.exports = router
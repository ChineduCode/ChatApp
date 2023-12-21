const express = require('express') 
const expressLayouts = require('express-ejs-layouts')

const app = express()

//CSS
app.use(express.static('public'))
app.use('/styles', express.static(__dirname + 'public/styles'))
app.use('/css', express.static(__dirname + 'public/css'))

//EJS
app.use(expressLayouts)
app.set('layout', './layouts/index')
app.set('view engine', 'ejs')

//body parser
app.use(express.urlencoded({ extended: false }))

app.use('/', require('./routes/index')) //for index pages
app.use('/users', require('./routes/users')) //for user pages
app.get('*', (req, res)=> res.render('404', {title: '404'})) //No page

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`server running on port ${PORT}`))
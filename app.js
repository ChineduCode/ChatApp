const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()

//CSS
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

//EJS
app.use(expressLayouts)
app.set('view engine', 'ejs')

//routes
app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`server running on port ${PORT} ...`))
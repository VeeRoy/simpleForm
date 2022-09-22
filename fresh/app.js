const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const registerRoute = require('./routes/register')

require('dotenv').config()

const PORT = process.env.PORT
const app = express()


// app.use('./register', registerRoute)

app.get('/', (req, res)=>{
    res.send('welcome')
})

app.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname, './static/register.html'))
})
app.use('/register', registerRoute)




app.listen(PORT, ()=>{
    console.log("server started")
})
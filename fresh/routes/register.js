const express = require('express')
const path = require('path')
const db = require('../model')
const userSchema = db.user
const bodyparser = require('body-parser')

const userRouter = express.Router()

userRouter.use(bodyparser.urlencoded({
    extended: true
}))

userRouter.use(bodyparser.json())

userRouter.post('/', (req, res) => {
    async function createNew(){
        const userInfo = req.body
        console.log(userInfo)
    try {
        const user = await userSchema.create(userInfo)
        res.status(200).send('registration successful')
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
}
createNew()
})

module.exports = userRouter 
const express = require ('express')
const { signUp, signIn } = require('../Controllers/User')
const { validationRegister, Validation } = require('../Middlewares/Validator')
const { isAuth } = require('../Middlewares/isAuth')


const userRouter = express.Router()


userRouter.post('/signUp',validationRegister,Validation ,signUp)

userRouter.post('/signIn', signIn)

userRouter.get('/CurrentUser', isAuth,(req,res)=>{res.send(req.user)})


module.exports = userRouter
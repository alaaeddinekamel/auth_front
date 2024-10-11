const User = require("../Models/User")
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

exports.signUp = async(req,res)=>{
    try {
        const {name,email,password} = req.body 
        const found = await User.findOne({email})
        if(found){
            return res.status(400).send({errors : [{msg : 'email alearedy exists'}]})
        }
        const newAccount = new User(req.body)

        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);
        newAccount.password = hashedPassword

        newAccount.save()

        const payload = {id : newAccount._id}
        var token =jwt.sign(payload, process.env.privateKey, {expiresIn : '7d'})

        res.status(200).send({msg : 'account created', newAccount, token})


    } catch (error) {
        res.status(500).send({errors : [{msg:'could not create account'}]})
    }
}

exports.signIn = async(req,res)=>{
    try {
        const {email,password} = req.body
        const found = await User.findOne({email})

        if(!found){
            return res.status(400).send({errors : [{msg : "wrong email or password"}]})
        }

        const match = bcrypt.compareSync(password, found.password)
        if(!match){
            return res.status(400).send({errors : [{msg : "wrong email or password"}]})
        }

        const payload = {id : found._id}
        const token = jwt.sign(payload, process.env.privateKey, {expiresIn : '7d'})

        res.status(200).send({msg : 'welcome to your account',found,token})
    } catch (error) {
        res.status(500).send({errors : [{msg : "couldn't log in"}]})
    }
}
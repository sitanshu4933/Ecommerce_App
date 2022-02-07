const express = require('express')
const router=express.Router()
const {Signup,Signin,Signout}=require('../controller/auth')
const {requirelogin}=require('./common-middleware/index')
const { validateSigninRequest,validateSignupRequest, isRequestValidated } = require('./validators/auth')

router.post('/signin',validateSigninRequest,isRequestValidated,Signin)
router.post('/signup',validateSignupRequest,isRequestValidated,Signup)
router.post('/signout',requirelogin,Signout)
router.post('/profile',requirelogin,(req,res)=>{
    console.log(req.user)
})

module.exports=router 
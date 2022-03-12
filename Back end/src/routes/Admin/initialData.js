const express = require('express')
const router=express.Router()
const {InitialData}=require('../../controller/Admin/initialData')

router.get('/initialData',InitialData)

module.exports =router

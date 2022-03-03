const express = require('express')
const router = express.Router()
const { addCategory, getCategory } = require('../controller/category')
const { requirelogin, adminMiddleware } = require('./common-middleware')
const multer=require('multer')
const path=require('path')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname),'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname + '-' + Date.now())
    }
  })
   
  var upload = multer({ storage})

router.post('/category/create', requirelogin, adminMiddleware, upload.single('categoryImage'),addCategory)
router.get('/category/getcategory', getCategory)

module.exports = router 
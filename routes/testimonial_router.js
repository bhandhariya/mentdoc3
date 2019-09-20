  
var express = require('express');
var router = express.Router();
var Testimonial=require('../controller/testimonial_controller')


router.post('/upload',Testimonial.upload)

// router.get('/getbanner',Banner.getAllBanners);

// router.post('/deleteBanerByid',Banner.deletebyid)

module.exports = router;
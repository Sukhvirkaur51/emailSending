var express=require('express');
var route=express.Router();

var ctrl=require('../controller/userController');

route.get('/',ctrl.openPage);
route.post('/mail',ctrl.sendingEmail);
module.exports=route;
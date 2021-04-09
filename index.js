var express=require('express');
var app=express();

var bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

var apiroutes=require('./routes/userRoutes');

app.use('/',apiroutes);
app.listen(3200,(err)=>{
if(err){
    console.log("error running server")
}
else{
    console.log("server is running on http://localhost:3200")
}
});

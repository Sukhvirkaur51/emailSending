var nodemail=require('nodemailer');
var multer =require('multer');

module.exports.openPage=(req,res)=>{
    res.sendFile(__dirname+"/views/form.html");
}




var st=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,__dirname+"/files")


    },filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});

var fileUpload=multer({storage:st}).single('image');





var transport=nodemail.createTransport({

    service: 'gmail',
    auth:{
        user:'randomale393@gmail.com'  ,
        pass:'randomac.@393'
    }

});

module.exports.sendingEmail=(req,res)=>{
    fileUpload(req,res,(err)=>{
        if(err){
            console.log("file uploading failed",err)
        }
        else{
    
    var mailOption={
        from:"randomale393@gmail.com",
        to:req.body.to,
        subject: req.body.subject,
        text:req.body.msg,
        attachments:
        {
        filename:req.file.filename,
        path:req.file.path,
        }
    
    };
 transport.sendMail(mailOption,(err)=>{
     if(err){
         console.log("Error in email"+err);
     }
     else{
         console.log("mail sent");
         
     }

    })
}
    })
 }



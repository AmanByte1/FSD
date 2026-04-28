var nm=require("nodemailer")
var trans=nm.createTransport({
    host:"smtp.gmail.com",
    port:465,
    auth:{
        user:"amandiwan775@gmail.com",
        pass:"rxno nyvt sfjo zpkp"

    }
})


// var mailer={
    // send:function(to,sub,msg){
        var mailoption={
            from:"amandiwan775@gmail.com",  
            to:"amandiwan775@gmail.com",
            subject:"hello",
            text:"aman"
        }   
        trans.sendMail(mailoption,(err,info)=>{
            if(err){
                console.log(err)
            }else{
                console.log(info)
            }
        })
    // }
// }
// module.exports=mailer   

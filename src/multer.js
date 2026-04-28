const expr = require('express')
const app=expr()
const multer=require('multer')

app.use(expr.static("../public",{index:"form.html"}))

var store=multer.diskStorage({
    destination:"LJU",
    filename:function(req,file,cb){
        cb(null,file.fieldname + Date.now()+".pdf")

    }
})
try{
var upload=multer({storage:store,limits:{fileSize:1024*1024}})



app.post("/data",upload.array("mypic",5),(req,res)=>{
    files=req.files

    if(files){
        res.set("content-type","text/html")
        for(i of files){
            res.write("<h1> your file named as <span style='color:blue'>"+i.originalname+"</span> is uploaded successfully</h1>")
        }
        res.send()
    }
})
}
catch{
    document.write("<h1 style='color:red'>"+hello+"</h1>")
}
app.listen(8089)
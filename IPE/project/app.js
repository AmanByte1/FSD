const fs=require("fs"
);


fs.readFile("source.txt","utf8",(err,data)=>{

    // if(err){
    //     console.log("err reading file",err);
    //     return;

    // }

    fs.writeFile("destination.txt",data,(err)=>{

        // if (err){
        //     console.log("err writing file",err);
        //     return;
        // }
        // console.log("file written successfully");
        });
    
    });


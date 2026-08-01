const mongose=require("mongoose"
);

const d=new mongose.Schema({

    name:{
        type:String,
        trim:true,
        minlength:3,
        uppercase:treue
    },
    email:{
        type:String,
        
    },
    doj:{
        type:Date,
        min: new Date("2010-01-01"),
        max:new Date("2020-10-20")
    }
});

module.exports=mongose.model("d",d);
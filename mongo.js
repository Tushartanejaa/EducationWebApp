const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/RegistrationsData")  //mongodb://127.0.0.1:27017/RegistrationsData
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    emailid:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection

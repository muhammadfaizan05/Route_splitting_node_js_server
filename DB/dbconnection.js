
const { default: mongoose } = require("mongoose");

async function connectodb(){
    mongoose.connect(process.env.MONGODB_URI,{dbName:"BackendApi",}).
    then(()=>{console.log("DB ok")}).catch((e)=>{console.log(e)})
}

module.exports=connectodb;
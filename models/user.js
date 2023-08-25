const { default: mongoose } = require("mongoose");

const Schema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

module.exports = mongoose.model("Users",Schema);
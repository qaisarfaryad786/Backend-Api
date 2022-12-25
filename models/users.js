const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:{
        type:String,
        unique:true
    },
    password:String
});

const register = new mongoose.model("register",userSchema);
module.exports = register;
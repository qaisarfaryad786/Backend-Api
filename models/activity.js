const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true

    },
    date:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }  
});

const activity = new mongoose.model("activity",userSchema);
module.exports = activity;
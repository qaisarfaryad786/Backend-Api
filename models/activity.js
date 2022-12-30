const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    activityName:{
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
        type:Date,
        required:true
    }  
});

const activity = new mongoose.model("activity",userSchema);
module.exports = activity;
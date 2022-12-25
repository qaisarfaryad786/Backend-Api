const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fake",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connected successfully");
}).catch((e)=>{
    console.log("Not connected with DB");
})
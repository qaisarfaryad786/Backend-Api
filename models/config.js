const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://hamza786:contourisgreat@exercisetracker.qrxwi7s.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connected successfully");
}).catch((e)=>{
    console.log("Not connected with DB");
})
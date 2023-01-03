const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://hamza786:contourisgreat@exercisetracker.qrxwi7s.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connected successfully");
}).catch((e)=>{
    console.log("Not connected with DB");
})

// mongodb+srv://hamza786:<password>@exercisetracker.qrxwi7s.mongodb.net/?retryWrites=true&w=majority

// mongodb+srv://hamza786:contourisgreat@exercisetracker.qrxwi7s.mongodb.net
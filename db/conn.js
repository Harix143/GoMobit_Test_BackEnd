const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/gomobit", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
console.log("Connect Successfully!");
}).catch((e) => {
    console.log("No Connected...!",e);
});

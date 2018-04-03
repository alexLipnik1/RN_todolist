const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/test', function(err){
    console.log("We're connected to MongoDB.");
})

module.exports={
    mongoose
}
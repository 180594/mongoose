const { default: mongoose } = require("mongoose");

const { Schema } = mongoose;


// Create a person with this prototype:

const userSchema = new Schema({

    name:{ type: String,
        required: true,
        unique: true,}, 
    age: Number ,
    favoriteFoods: [],
    

})
module.exports = mongoose.model('user',userSchema)
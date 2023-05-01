const express = require ('express')
const app = express()
const port = 4000
const mongoose= require ('mongoose')
const userSchema = require ('./blogModels')





// Installing and setting up Mongoose:

app.listen (port, (res,req)=>{
    console.log('server is started'); 
 })
 
const server = 'localhost:27017';
const database = 'contact';  
const connect =async()=>{
    await mongoose.connect('mongodb+srv://29461627amira:<KP8S8EVn9JeGHxsm>@cluster0.rshw9be.mongodb.net/users',{ useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log('Database connection successful')
      })
      .catch(err => {
        console.error('Database connection error')
      })
 };
connect()



// Create and Save a Record of a Model:

let msg = new userSchema({
    name:{ type: "taline",
        required: true,
        unique: true,}, 
    age: 5 ,
    favoriteFoods: ["pizza","spaguetti"]
})
msg.save()
.then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })








//   Use model.find() to Search Your Database

userSchema.find({
       name:"taline"
  })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })
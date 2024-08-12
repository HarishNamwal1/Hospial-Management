const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const registerSchema = new mongoose.Schema({
  firstname:
  {
    type:String,
    required:true
  },
  lastname:
  {
    type:String,
    required:true
  },
  email:
  {
    type:String,
    required:true
   },
  // age:
  // {
  //   type:String,
  //   required:true
  // },
  // mobile:
  // {
  //   type:String,
  //   required:true
  // },
  image:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
})

registerSchema.pre("save",function(next){
  if(!this.isModified("password")){
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});
registerSchema.methods.comparePassword = function(plaintext, callback) {
  return callback(null, bcrypt.compareSync(plaintext, this.password))
};

const registerSchema1 = new mongoose.model("register",registerSchema);
module.exports = registerSchema1;
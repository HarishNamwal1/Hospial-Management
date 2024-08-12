const mongoose = require('mongoose');
var conn = mongoose.connect("mongodb+srv://harishyadav98284:harish123@cluster0.26wyo8p.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0",
{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
.then(()=>console.log("connection successfully.."))
.catch((err)=>console.log(err));
module.exports = conn;
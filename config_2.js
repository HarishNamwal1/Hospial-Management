const mongoose = require('mongoose');
var conn = mongoose.connect("mongodb+srv://harishyadav98284:harish123@cluster0.26wyo8p.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0",
{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
.then(()=>console.log("connection successfully.."))
.catch((err)=>console.log(err));
// module.exports = conn;
const listSchema  = new mongoose.Schema({
  name:
  {
    type:String,
    required:true
  },
  email:
  {
    type:String,
    required:true
  },
  // active:Boolean
  date:
  {
    type:Date,
    default:Date.now
  }
})
const Playlist = new mongoose.model("Playlist",listSchema);

// crate document or insert
const createDocument = async () => {
  try{
    const productList2 = new Playlist({
      name:'Ram',
      email:'ram@gmai.com'
    })
    const productList3 = new Playlist({
      name:'jon',
      email:'jon@gmai.com'
    })
    const productList4 = new Playlist({
      name:'alex',
      email:'alex@gmai.com'
    })
    const result = await Playlist.insertMany([productList2,productList3,productList4]);
    console.log(result);
  } catch (err){
    console.log(err);
  }
}
// createDocument();
// const getDocument = async()=>{
//   const result = await Playlist.find();
//   console.log(result);
// }
// getDocument();
// const getDocument = async()=>{
//   const result = await Playlist.findOne({name:'Ram'});
//   console.log(result);
// }
// getDocument();
// const getDocument = async()=>{
//   const result = await Playlist.find({},)
// }

// const mysort = {name:1};
// const getDocument = async()=>{
//   const result = await Playlist.find().sort(mysort).toArray(function(err,result){
//     console.log(result);
//   })
// }
// getDocument();
const getDocument = async()=>{
  const result = await Playlist.deleteOne({name:'Ram'});
  console.log(result);
}
getDocument();
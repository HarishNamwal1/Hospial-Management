var express = require('express');
var router = express.Router();
var registerSchema = require('../model/userSchema');
var multer = require('multer');

router.get('/',function(req,res){
  res.render('index');
})
router.get('/aboutus',function(req,res){
  res.render('findaDoctor');
})
router.get('/treatment',function(req,res){
  res.render('treatment');
})
router.get('/services',function(req,res){
  res.render('services');
})
router.get('/registration',function(req,res){
  res.render('registration');
})
router.get('/dashboard',function(req,res){
  res.render('dashboard');
} )
router.get('/login',function(req,res){
  res.render('login');
} )
router.post('/login', async(req, res) => {
  var email = req.body.email,
  password = req.body.password;

  try{
      var user = await registerSchema.findOne({ email: email })
      .exec();
      if(!user){
          res.redirect('/');
      }
      user.comparePassword(password, (error, match) => {
          if(!match){
              res.redirect('/');
  }
});

res.redirect('/dashboard');
  } catch(error) {
      console.log(error)
  }
})
// File upload
const storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'./uploads');
  },
  filename:function(req,file,cb){
    cb(null,file.originalname);
    // cb(null,uuidv4()+'-'+Date.now()+path.extname(file.originalname)) //Appending.jpg
  }
});
const fileFilter = (req,file,cb)=>{
  const allowedFileTypes = ['image/jpeg','image/jpg','image/png','image/webp'];
  if(allowedFileTypes.includes(file.mimetype)){
    cb(null,true);
  }
  else{
    cb(null,false);
  }
}
let upload = multer({storage,fileFilter});
// post register
router.post('/registration',upload.single('image'),(req,res) => {
  var register = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    // age: req.body.age,
    // mobile: req.body.mobile,
    password: req.body.password,
   image:req.file.filename
  };

  var regpost = new registerSchema(register);
  regpost.save()
  .then(() =>
    res.json('register successfully'))
  .catch(err => res.status(400).json('errror:' +err));
});

// view register
router.get('/viewregister',async(req,res)=>{
  try{
    const regdata = await registerSchema.find({});
    res.render('viewregister',{regdata:regdata});
    console.log(regdata);
  }
  catch (err){
    console.log(err);
  }
});
router.get('/viewappointment',async(req,res)=>{
  try{
    const regdata = await registerSchema.find({});
    res.render('viewappointment',{regdata:regdata});
    console.log(regdata);
  }
  catch (err){
    console.log(err);
  }
});
router.get('/findaDoctor',async(req,res)=>{
  try{
    const docdata = await registerSchema.find({});
    res.render('findaDoctor',{docdata:docdata});
    console.log(docdata);
  }
  catch (err){
    console.log(err);
  }
});
router.get('/delete/:id',async(req,res)=>{
  try{
    const regsdata = await registerSchema.findByIdAndDelete(req.params.id);
    res.redirect('/viewappointment');
  }
  catch (err){
    console.log(err);
  }
});
router.get('/edit/:id',async(req,res)=>{
  try{
    const editdata = await registerSchema.findById(req.params.id);
    res.render('editregisterform',{editdata:editdata});
  }
  catch (err){
    console.log(err);
  }
});
router.post('/edit/:id',async(req,res)=>{
  const itemId = req.params.id;
  const updatedData ={
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    age: req.body.age,
    mobile: req.body.mobile
  }
  try{
    const updatedItem = await registerSchema.findByIdAndUpdate(itemId,updatedData);
    if(!updatedItem){
      return res.status(404).json({message:'Item not Found'});
    }
    res.redirect('/viewappointment');
  }
  catch(err){
    res.status(500).json({message:'Server Error'});
  }
});
module.exports = router;
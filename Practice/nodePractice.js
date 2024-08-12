// let x = 10;
// let y = 15;
// console.log(x+y);

// function fun(x=10,y=3){
//   console.log(x*y);
//   console.log("Hello world");
//   console.log("Nodejs");
// }
// fun();
// var http = require('http');
// http.createServer(function (req,res){
//   res.write("Hello World");
//   res.write("Nodejs");
//   res.write("Javascript");
//   res.end();
// }).listen(7200);

// var http = require('http');
// var fs = require('fs');
// http.createServer(function(req,res){
//   fs.readFile('demo.html',function(err,data){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(7000);

// var sum = function(a,b){
//   return a+b;
// }
// module.exports = sum;

// var http = require('http');
// var sum = require('./demo');
// http.createServer(function (req,res){
//  console.log(sum(10,20));
//   res.end();
// }).listen(7200);

// var nodemailer = require('nodemailer');
// var transport =  nodemailer.createTransport({
//   host:'smtp.gmail.com',
//   port:587,
//   secure:false,
//   requireTLS:true,
//   auth:{
//     user:'harishyadav98284@gmail.com',
//     pass:'ukzk hprq ixom bfod'
//   }
// });
// var mailOptions = {
//   from:'harishyadav98284@gmail.com',
//   to:'namwalharish@gmail.com',
//   subject:'node mail',
//   text:'hello node'
// }
// transport.sendMail(mailOptions,function(error,info){
//   if(error)
//     {
//       console.warn(error);
//     }
//     else{
//       console.warn('email has been send',info.re)
//     }
// })

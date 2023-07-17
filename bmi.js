var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors=require("cors");
app.use(cors());
app.use(bodyParser.json())
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   var weight = parseFloat(req.body.weight);
   var height = parseFloat(req.body.height);
   var bmi = weight / (height * height);
   var a="";
      if (bmi < 0.0019) {
         a=(`hey! your BMI is around: ${bmi}<centre><h1>You are Under weight!`);
     } else if (0.0019 <= bmi && bmi < 0.0025) {
         a=(`hey! your BMI is around: ${bmi}<centre><h1>You are correct weight!`);
     } else if (0.0025 <= bmi && bmi < 0.0030) {
         a=(`hey! your BMI is around: ${bmi}<centre><h1>You are high weight!`);
     } else {
         a=(`hey! your BMI is around:${bmi}<centre><h1>You are Obese!`);
     }
     res.end(JSON.stringify(a))
})
var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })
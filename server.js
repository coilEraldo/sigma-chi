
var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());





  var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
app.post('/contactsend', function (req, res) {
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      return console.log(error);
      res.send({success: 0});
    }
    console.log(req.form_name);
    console.log('Message sent: ' + info.response);
  });
  console.log('sent');
  res.send({success: 1});
});

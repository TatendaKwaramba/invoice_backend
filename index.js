const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const nodemailer = require("nodemailer");

const pdfTemp = require('./docs/index');

const app = express();

const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Email function
var sendEmail = (toEmail, fromEmail, subject, body, attachement) => {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "96836ffb71d2e5",
        pass: "dc8467008d9155"
      }
    });
  
    // send mail with defined transport object
    transporter.sendMail({
      from: 'Invoice Generator', // sender address
      to: toEmail, // list of receivers
      subject: subject, // Subject line
      text: body, // plain text body
      attachments: [
          {
            filename: attachement[0].file,
            path: attachement[0].path  
          }
      ]
    }, function(err, info){
        if(err){
            console.log(err)
        } else {
            console.log(info)
        }
    });
  
    console.log("Message sent: %s", toEmail);
    console.log("Message sent: %s", fromEmail);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  }

// Post - pdf generation

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemp(req.body), {}).toFile('result.pdf', (err) => {
        if(err){
            res.send(Promise.reject());
        }
        let {toEmail, fromEmail} = req.body
        let subject = "Email From Jugaad Invoice"
        let body = "Please find the invoice attachement below" 
        let attachement = [{
            filename: 'result.pdf',
            path: `${__dirname}/result.pdf`
        }]
        sendEmail(toEmail, fromEmail, subject, body, attachement);
        res.send(Promise.resolve());
    });
});

app.post('/download-pdf', (req, res) => {
  pdf.create(pdfTemp(req.body), {}).toFile('result.pdf', (err) => {
      if(err){
          res.send(Promise.reject());
      }
      res.send(Promise.resolve());
  });
});

// Get

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
});

app.listen(port, () => console.log(`Listen on port ${port}`));




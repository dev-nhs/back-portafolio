"use strict";
const nodemailer = require("nodemailer");

const config = require('./src/database/config')
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const router = express.Router();

app.use('/api', router);

router.get('/', (req, res) => {
  res.send('Hello, world!');
});

router.post('/sendemail', (req, res) => {
  //res.send(config.EMAIL +" "+ config.PASSWORD +" "+ config.EMAIL_RECEIVED );
  //res.send(main(req).catch(console.error));
 main(req).catch(console.error);
  /* main().catch((error) => {
    console.error("Error sending email:", error);
  }); */
  // verify connection configuration


  transporter.verify(function (error, success) {
  if (error) {
    res.send(error);
  } else {
    res.send(success);
  }
}); 

});



const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", /* smtp.gmail.com */
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: config.EMAIL,
    pass: config.PASSWORD
  }
});

// async..await is not allowed in global scope, must use a wrapper
async function main(req) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"Bot DevOps 🤖" <${req.body.email}>`, // sender address
    to: config.EMAIL_RECEIVED, // list of receivers sss
    subject: `${req.body.subject} ✔`, // Subject line
    text: "Hello world?", // plain text body
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Simple Transactional Email</title>
        <style>
            body {
                background-color: #f6f6f6;
                font-family: sans-serif;
                font-size: 14px;
                line-height: 1.4;
                margin: 0;
                padding: 0;
            }
    
            table {
                border-collapse: separate;
                width: 100%;
            }
    
            table td {
                font-family: sans-serif;
                font-size: 14px;
                vertical-align: top;
            }
    
            .container {
                margin: 0 auto !important;
                max-width: 580px;
                padding: 10px;
            }
    
            .content {
                box-sizing: border-box;
                margin: 0 auto;
                max-width: 580px;
                padding: 10px;
            }
    
            .main {
                background: #ffffff;
                border-radius: 3px;
            }
    
            .wrapper {
                padding: 20px;
            }
    
            h1, h2, h3, h4 {
                color: #000000;
                font-family: sans-serif;
                font-weight: 400;
                margin: 0;
                margin-bottom: 30px;
            }
    
            h1 {
                font-size: 35px;
                font-weight: 300;
                text-align: center;
                text-transform: capitalize;
            }
    
            p, ul, ol {
                font-family: sans-serif;
                font-size: 14px;
                margin: 0;
                margin-bottom: 15px;
            }
    
            a {
                color: #3498db;
                text-decoration: underline;
            }
    
            .btn {
                width: 100%;
            }
    
            .btn table td {
                background-color: #ffffff;
                border-radius: 5px;
                text-align: center;
            }
    
            .btn a {
                background-color: #ffffff;
                border: solid 1px #3498db;
                border-radius: 5px;
                color: #3498db;
                cursor: pointer;
                display: inline-block;
                font-size: 14px;
                font-weight: bold;
                margin: 0;
                padding: 12px 25px;
                text-decoration: none;
                text-transform: capitalize;
            }
    
            .btn-primary table td {
                background-color: #3498db;
            }
    
            .btn-primary a {
                background-color: #3498db;
                border-color: #3498db;
                color: #ffffff;
            }
    
            .footer {
                clear: both;
                margin-top: 10px;
                text-align: center;
                width: 100%;
            }
    
            .footer td, .footer p, .footer span, .footer a {
                color: #999999;
                font-size: 12px;
                text-align: center;
            }
        </style>
    </head>
    <body>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
        <tr>
            <td>&nbsp;</td>
            <td class="container">
                <div class="content">
                    <table role="presentation" class="main">
                        <tr>
                            <td class="wrapper">
                                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td>
                                            <p>Hola <b>Nehemias</b>, <br>Tenemos una buena noticia para ti...</p>
                                            <p>El usuario&nbsp;<b>${req.body.name}</b>&nbsp; con email <b>${req.body.email}</b>&nbsp; te ha dejado un mensaje!</p>
                                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                                                <tbody>
                                                <tr>
                                                    <td align="left"><a href="https://portafolio-pearl-six.vercel.app/" target="_blank">Visitar Web</a></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <p style="margin-top: 10px;">${req.body.message}</p>
                                            <p>...</p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <div class="footer">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="content-block">
                                    <span class="apple-link">Company Inc, Developed by Nehemias, Lima Perú</span>
                                </td>
                            </tr>
                            <tr>
                                <td class="content-block powered-by">
                                    Powered by <a href="https://portafolio-pearl-six.vercel.app/">dev-nhs</a>.
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </td>
            <td>&nbsp;</td>
        </tr>
    </table>
    </body>
    </html>
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}


var port = config.PORT;
app.listen(port);
console.log('Se ha desplegado el API DevOps: ' + port);
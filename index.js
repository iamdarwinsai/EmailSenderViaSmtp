let nodemailer = require("nodemailer");
let aws = require("@aws-sdk/client-ses");
require("dotenv").config();

const ses = new aws.SES({
  apiVersion: "2010-12-01",
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  },
});

let transporter = nodemailer.createTransport({
  SES: { ses, aws },
});

const sendEmail = async () => {
  try {
    // Email content
    const mailOptions = {
      from: {
        name: "Web Wizard",
        address: process.env.FROM_EMAIL,
      },
      to: ["your@gmail.com"],
      subject: "Test Email with Attachments",
      text: "Hello, this is a test email with attachments!",
      html: "<b>Hello, this is a test email with attachments!</b>",
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
  } catch (error) {
    console.error(error.Error);
  }
};

sendEmail();

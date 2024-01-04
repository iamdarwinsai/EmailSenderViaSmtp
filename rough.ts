import * as nodemailer from 'nodemailer';
import * as smtpTransport from 'nodemailer-smtp-transport';

// Replace these values with your own SMTP server details
const smtpConfig = {
  host: 'email-smtp.us-east-1.amazonaws.com',
  port: 465, // use your SMTP server port
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'AKIAQS3LJQJN3O7FHZE6',
    pass: 'BH8uSS8AKWBsN4qjzCImGPkeGAliOIx3OyxtTVZLt1rE',
  },
};

// Create a Nodemailer transporter using SMTP
const transporter = nodemailer.createTransport(smtpTransport(smtpConfig));
const resetLink = 'https://example.com/reset-password'; 

const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forgot Password</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333333;
        }
        p {
            color: #555555;
        }
        .cta-button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #3498db;
            color: #ffffff;
            text-decoration: none;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Forgot Password?</h1>
        <p>Hi [User],</p>
        <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
        <p>To reset your password, click the button below:</p>
        <a href="${resetLink}" class="cta-button">Reset Password</a>
        <p>If the button above doesn't work, you can also copy and paste the following link into your browser:</p>
        <p>[${resetLink}]</p>
        <p>If you have any questions or need further assistance, please contact our support team.</p>
        <p>Thanks,<br>Your Company Name</p>
    </div>
</body>
</html>
`
const mailOptions = {
    from: 'darushyam143@gmail.com',
    to: 'darushyam143@gmail.com',
    subject: 'Test HTML Email',
    text: 'Hello, this is a test email!',
    html: htmlTemplate,
  };
  
  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error('Error:', error);
    }
    console.log('Email sent:', info);
  });
  

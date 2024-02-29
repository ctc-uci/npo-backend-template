// FIXME: keep file only if using nodemailer

const nodemailer = require('nodemailer');

const emailSender = `${process.env.EMAIL_FIRSTNAME} ${process.env.EMAIL_LASTNAME}`;

// sender information
const transport = {
  host: 'smtp.gmail.com', // e.g. smtp.gmail.com
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
  from: process.env.EMAIL_USERNAME,
  secure: true,
};

const transporter = nodemailer.createTransport(transport);

module.exports = { transporter, emailSender };

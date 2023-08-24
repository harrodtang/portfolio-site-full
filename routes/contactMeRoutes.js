const router = require("express").Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

router.post("/contact", (req, res) => {
  let data = req.body;

  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.status(400).json({ msg: "Please fill in all the fields" });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "harrodtang@gmail.com",
      pass: process.env.EMAIL_TEMP_PASS,
    },
  });

  let mailOptions = {
    from: data.email,
    to: "harrodtang@gmail.com",
    subject: `Message from ${data.name}`,
    html: `
    
    <h3>Sender Information</h3>
    <ul>
    <li>Name: ${data.name}</li>
    <li>Email: ${data.email}</li>
    </ul>

    <h3>Message</h3>
    <p>${data.message}</p>
    `,
  };

  smtpTransporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Send Mail Error:", error);
      return res.status(500).json({ msg: "Internal Server Error" });
    }
    res.status(200).json({ msg: "Thank you for contacting me!" });
  });
});

module.exports = router;

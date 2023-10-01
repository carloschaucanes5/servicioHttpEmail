const {Router} = require("express");
const router = Router();


router.get("/email/",(req,res)=>{
    //---------------------------------------------------
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: 'sistemas.eseospina@gmail.com',
          pass: 'amic ooud povh wxca'
        }
      });
      transporter.verify().then(()=>{
        console.log("ready for send emails");
      });

      transporter.sendMail({
        from:'sistemas.eseospina@gmail.com',
        to:"ingcarlosgerman@hotmail.com",
        subject:"hello",
        text:"hello world",
        html:"<b>hello world</b>"
      });

    //---------------------------------------------------
    //res.send("email");
})

module.exports = router;
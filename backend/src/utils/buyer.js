const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const User = require('../model/User');
const nodemailer = require("nodemailer")
const Listing = require('../model/Listing');


class Utils_Buyer {

    async sendEmail (sellerListingId, buyerName, res) {
        try {

          //sellerListingId = sellerId
          //buyUserId = userID from session storage

            let listing = await Listing.findById(sellerListingId);
            //let listingUser = await User.findById(listing._id);
            let listingUser = await User.findById(listing.sellerId);
            //let buyerUser = await User.findById(buyUserId);

            // let testAccount = await nodemailer.createTestAccount();

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                // OAutho way
                // host: "smtp.gmail.email",
                // port: 465,
                // secure: true, // true for 465, false for other ports
                // auth: {
                //     type: "OAuth2",
                //     user: "johnjacksontest123@gmail.com", // generated ethereal user
                //     pass: testAccount.EMAIL_PASSWORD_NODEMAILER, // generated ethereal password
                //     clientId: "599907195762-k1v8ha4g9509e6fs35svrr6ak2kundto.apps.googleusercontent.com",
                //     clientSecret: "QQolKLEx2GzdLiS-O2K6xC_j",
                //     refreshToken: "1//04n95NWsjZhScCgYIARAAGAQSNwF-L9IrA8H_aAuOi5qxrqWLnYO4ucALp6gFjVxaYkuCCd57mIw5W0A_BX5Yb50Xa-9bLdKi_kU"
                // },

                //port: 3010,
                //secure: false, // use SSL

                service: 'gmail',
                auth: {
                    user: 'johnjacksontest123@gmail.com',
                    pass: 'thisistest123'
                }
            });
            console.log("in email "+listingUser.email);
            const emailTemplate = {
                from: "johnjacksontest123@gmail.com", // sender address
                to: "yehiaqtaish1@gmail.com", // list of receivers
                subject: "Application Notification!", // Subject line
                //text: `Hello! ${buyerName} has sparked interest in your listing please contact them to communicate further regarding application`, // plain text body
                html: "<b>Hello world?</b>" // html body
            };
            // send mail with defined transport object
            let info = await transporter.sendMail(emailTemplate);

            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            return res.status(200).json({
                message: "Email sent!",
                success: true
            })
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                message: "something went wrong",
                success: false
            });
        }
        res.end();
    }


}

module.exports = Utils_Buyer;

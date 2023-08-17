const nodemailer = require("nodemailer");
const config = require("../config/config");

let transport = nodemailer.createTransport({
    host: config.email.smtp.host,
    post: config.email.smtp.post,
    auth:{
        user: config.email.smtp.auth.user,
        pass: config.email.smtp.auth.pass,
    },
});

// send mail

const sendMail = async(to , subject , text) =>{
    try{
        return transport.sendMail({
            from: config.email.from,
            to,
            subject,
            text,
        });
    }
    catch(error){
    return false;
    }
};

module.exports = {
    sendMail,
};
const sgMail = require('@sendgrid/mail');
const { body } = require('./body');

require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const client = require("twilio")(process.env.TEST_SID, process.env.TEST_TOKEN);

const from = process.env.TEST_FROM.toString();
const to = process.env.DANAR.toString();

const mailFrom = process.env.MAIL_FROM;
const mailTo = process.env.MAIL_TO;

const d = new Date("June 25, 2020 21:36:50");
const mill = d.getTime() - (new Date()).getTime();

console.log(body);

const run = () => {
    // setTimeout(() => {
    // }, mill);
    
    client.messages
      .create({
        body,
        from,
        to,
      })
      .then((message) => {
        console.log("SMS------------------------------------------>");
        console.log(message);
      })
      .catch((err) => {
        console.error(err);
      });
      
      const msg = {
        to: mailTo,
        from: mailFrom,
        subject: 'SMS was sent successfully',
        text: `Hi Zubeir,\n\n The SMS with the message: \n\n"${body}" \n\n was sent succesfully to the number ${to} `,
      };
      sgMail.send(msg).then( res => {
          console.log("EMAIL-------------------------------------->");
          console.log(res);
      }, error => {
          if(error){
              console.error(error);
          }
      })
}

// run();



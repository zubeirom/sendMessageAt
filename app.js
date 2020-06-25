const sgMail = require('@sendgrid/mail');
const { smsBody } = require('./body');

require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const client = require("twilio")(process.env.SID, process.env.AUTH_TOKEN);

// steps: Define .env and fill with credentials, define date, define body in variable or create file - many options to choose 

// Create .env file and fill with necessary credentials for sendgrid (optional) and twilio
const from = process.env.FROM_NUMBER.toString();
const to = process.env.DANAR.toString();

const mailFrom = process.env.MAIL_FROM;
const mailTo = process.env.MAIL_TO;
//

// Define date and time of when to send the sms
const d = new Date("June 25, 2020 22:24:00");
//

const mill = d.getTime() - (new Date()).getTime();

// Please define body here if the smsBody file does not exist
const body = "was geht mo, sms " 
//smsBody
//



const run = () => {
    if(body) {
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
          // sgMail.send(msg).then( res => {
          //     console.log("EMAIL-------------------------------------->");
          //     console.log(res);
          // }, error => {
          //     if(error){
          //         console.error(error);
          //     }
          // })
        
    } else {
        console.error("Please define body");
    }

}

run();



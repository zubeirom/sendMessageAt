const { LogContext } = require('twilio/lib/rest/serverless/v1/service/environment/log');

require('dotenv').config();

const client = require('twilio')(process.env.SID, process.env.AUTH_TOKEN);

const from = process.env.FROM_NUMBER.toString();
const to = process.env.TO_NUMBER.toString();


client.messages.create({
    body: "Was geht bro",
    from,
    to
}).then(message => {
    console.log(message.sid);
}).catch(err => {
    console.error(err);
})
const { LogContext } = require('twilio/lib/rest/serverless/v1/service/environment/log');

require('dotenv').config();

const client = require('twilio')(process.env.TEST_SID, process.env.TEST_TOKEN);

const from = process.env.TEST_FROM.toString();
const to = process.env.DANAR.toString();


client.messages.create({
    body: "Sent from a Twilio Trial Account",
    from,
    to
}).then(message => {
    console.log(message);
}).catch(err => {
    console.error(err);
})
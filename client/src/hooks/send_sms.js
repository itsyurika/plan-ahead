// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
import { format } from 'date-fns';
// import 'dotenv/config'
require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const messagingServiceSid = process.env.TWILIO_MSG_SID;
const phoneNumber = process.env.PHONENUMBER;

// const client = require('twilio')(accountSid, authToken);


const scheduledTime = (new Date()).toISOString();

const message = "You have an assignment that is past due date or due tomorrow! Let's start working on it!";

const send_sms = () => {
  // client.messages
  // .create({
  //   messagingServiceSid: `${messagingServiceSid}`,
  //   body: `${message}`,
  //   to: `${phoneNumber}`
  // })
  // .then(message => console.log(message.sid));
}

export default send_sms;

//* code for scheduled message
// for (const number of testArray) {
//   client.messages
// .create({
//   messagingServiceSid: `${messagingServiceSid}`,
//   sendAt: `${scheduledTime}`,
//   scheduleType: 'fixed',
//   body: `${message}`,
//   to: `${number}`,
// })
// .then(message => console.log(message.sid));
// }


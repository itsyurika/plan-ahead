
const accountSid = process.env.REACT_APP_TWILIO_ACCOUNT_SID;
const authToken = process.env.REACT_APP_TWILIO_AUTH_TOKEN;
const messagingServiceSid = process.env.REACT_APP_TWILIO_MSG_SID;
const phoneNumber = process.env.REACT_APP_PHONENUMBER;

const ENV = {accountSid, authToken, messagingServiceSid, phoneNumber};

module.exports = {ENV};
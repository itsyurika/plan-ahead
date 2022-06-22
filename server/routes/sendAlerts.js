const router = require('express').Router();

module.exports = (ENV, client) => {
  const { messagingServiceSid, phoneNumber } = ENV;

  const message = "You have an assignment that is past due date or due tomorrow! Let's start working on it!";

  router.post('/', async (req, res) => {
    await client.messages
      .create({
        messagingServiceSid: `${messagingServiceSid}`,
        body: `${message}`,
        to: `${phoneNumber}`
      })
      .then(message => console.log(message.sid));
  });

  return router;
};
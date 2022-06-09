const router = require('express').Router();

module.exports = () => {
  router.get('/', (req, res) => {
    res.send("This is an assignment page");
  });
  return router;
}

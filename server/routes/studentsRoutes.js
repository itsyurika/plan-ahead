const router = require('express').Router();
const { getAllStudents } = require('../prisma');

module.exports = () => {
  router.get('/', (req, res) => {
    getAllStudents()
      .then((students) => {
        res.json(students);
      });
  });
  return router;
};

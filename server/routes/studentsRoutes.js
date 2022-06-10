const router = require('express').Router();
const { getAllStudents, createStudent } = require('../prisma');

module.exports = () => {
  router.get('/', (req, res) => {
    getAllStudents()
      .then((students) => {
        res.json(students);
      });
  });

  router.post('/', (req, res) => {
    createStudent()
  });



  return router;
};

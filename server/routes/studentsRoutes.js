const router = require('express').Router();
const { getAllStudents, createStudent } = require('../prisma');

module.exports = () => {
  router.get('/', (req, res) => {
    getAllStudents()
      .then((students) => {
        res.json(students);
      });
  });

  router.post('/', (req, res) => { // todo new student
    createStudent()
  });



  return router;
};

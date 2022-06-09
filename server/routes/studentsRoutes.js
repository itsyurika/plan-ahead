const router = require('express').Router();
const { getAllStudents } = require('../db/student_queries');

module.exports = () => {
  router.get('/', (req, res) => {
    getAllStudents()
    .then(students => {
      res.json(students)
    })
  });
  return router;
}

const router = require('express').Router();
const { createAssignment, getAllAssignments } = require('../prisma');

module.exports = () => {
  router.get('/', (req, res) => {
    getStudentAssignments()
      .then((assignments) => {
        res.json(assignments);
      });
  });

  router.post('/', (req, res) => {
    console.log(req.body)
    createAssignment(req.body); // todo add arguments
  });

  return router;
};



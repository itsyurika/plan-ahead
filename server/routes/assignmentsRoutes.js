const router = require('express').Router();
const { createAssignment, getAllAssignments, getStudentAssignments } = require('../prisma');

module.exports = () => {
  router.get('/', (req, res) => {
    getAllAssignments() // todo replace hardcoded student id
      .then((assignments) => {
        res.json(assignments);
      });
    // getStudentAssignments(1) // todo replace hardcoded student id
    //   .then((assignments) => {
    //     res.json(assignments);
    //   });
  });



  router.post('/', (req, res) => {
    createAssignment(req.body);
  });

  return router;
};



const router = require('express').Router();
const { createAssignment, getAllAssignments } = require('../prisma');

module.exports = () => {
  router.get('/', (req, res) => {
    getAllAssignments()
      .then((assignments) => {
        res.json(assignments);
      });
  });

  router.post('/', (req, res) => {
    createAssignment(); // todo add arguments
  });

  return router;
};

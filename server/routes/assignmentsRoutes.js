const router = require('express').Router();

module.exports = (prisma) => {
  router.get('/', async (req, res) => {
    const assignments = await prisma.assignment.findMany();
    res.json(assignments);
  });

  router.post('/', async (req, res) => {
    const assignment = await prisma.assignment.create({ data: req.body });
    res.json(assignment);
  });

  return router;
};


// prisma.studentAssignments.findMany({
//   where: { student_id },
//   include: { assignment: true },
// })
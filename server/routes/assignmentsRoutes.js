const router = require('express').Router();

module.exports = (prisma) => {
  const { assignment } = prisma;
  router.get('/', async (req, res) => {
    const assignments = await assignment.findMany({
      include: { studentAssignments: true, subject: true },
    });
    res.json(assignments);
  });

  router.post('/', async (req, res) => {
    const newAssignment = await assignment.create({ data: req.body });
    res.json(newAssignment);
  });

  return router;
};
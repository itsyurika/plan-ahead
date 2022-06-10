const router = require('express').Router();

module.exports = (prisma) => {
  router.get('/', async (req, res) => {
    console.log('did it get?', assignments);
    const assignments = await prisma.assignment.findMany();
    res.json(assignments);
  });

  router.post('/', async (req, res) => {
    const assignment = await prisma.assignment.create({ data: req.body });
    res.json(assignment);
  });

  return router;
};



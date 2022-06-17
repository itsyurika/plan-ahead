const router = require('express').Router();

module.exports = (prisma) => {
  router.get('/', async (req, res) => {
    const assignments = await prisma.assignment.findMany({ include: { subject: true }, });
    res.json(assignments);
  });

  router.post('/', async (req, res) => {
    const assignment = await prisma.assignment.create({ data: req.body, include: { subject: true }, });
    res.json(assignment);
  });

  router.put('/:id', async (req, res) => {
    const assignment = await prisma.assignment.update({ where: { id: +req.params.id, }, data: req.body, include: { subject: true }, });
    res.json(assignment);
  });

  router.patch('/:id', async (req, res) => {
    const assignment = await prisma.submission.update({ where: { id: +req.params.id }, data: req.body, include: { subject: true }, });
    res.json(assignment);
  });

  router.delete('/:id', async (req, res) => {
    await prisma.assignment.delete({ where: { id: +req.params.id } });
    res.json({ id: +req.params.id });
  });

  prisma.$disconnect();
  return router;
};
const router = require('express').Router();

module.exports = (prisma) => {
  router.get('/', async (req, res) => {
    const assignments = await prisma.assignment.findMany({ include: { subject: true }, });
    res.json(assignments);
  });

  router.post('/', async (req, res) => {
    const newAssignment = await prisma.assignment.create({ data: req.body, include: { subject: true }, });
    res.json(newAssignment);
  });

  router.put('/:id', async (req, res) => {
    const updatedAssign = await prisma.assignment.update({ where: { id: +req.params.id, }, data: req.body, include: { subject: true }, });
    res.json(updatedAssign);
  });

  router.patch('/:id', async (req, res) => {
    const updatedAssign = await prisma.submission.update({ where: { id: +req.params.id }, data: req.body, include: { subject: true }, });
    res.json(updatedAssign);
  });

  router.delete('/:id', async (req, res) => {
    await prisma.assignment.delete({ where: { id: +req.params.id } });
    res.json({ id: +req.params.id });
  });

  prisma.$disconnect();
  return router;
};
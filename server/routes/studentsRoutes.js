const router = require('express').Router();

module.exports = (prisma) => {
  router.get('/', async (req, res) => {
    const students = await prisma.student.findMany();
    res.json(students);
  });

  router.get('/:id', async (req, res) => {
    const student = await prisma.student.findUnique({ where: { id: +req.params.id }, include: { studentAssignments: true } });
    res.json(student);
  });

  router.post('/', async (req, res) => {
    const student = await prisma.student.create({ data: req.body });
    res.json(student);
  });

  return router;
};

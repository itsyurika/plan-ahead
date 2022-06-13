const router = require('express').Router();

module.exports = (prisma) => {
  // = teacher routes =
  router.get('/', async (req, res) => {
    const teachers = await prisma.teacher.findMany();
    res.json(teachers);
  });

  router.get('/:id', async (req, res) => {
    const teacher = await prisma.teacher.findUnique({ where: { id: +req.params.id } });
    res.json(teacher);
  });

  // create teacher
  router.post('/', async (req, res) => {
    const teacher = await prisma.teacher.create({ data: req.body });
    res.json(teacher);
  });


  // = assignments routes =
  router.get('/:id/assignments', async (req, res) => {
    const assignments = await prisma.assignment.findMany({ where: { teacherId: +req.params.id }, include: { subject: true }, });
    res.json(assignments);
  });

  prisma.$disconnect();
  return router;
};

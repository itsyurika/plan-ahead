const router = require('express').Router();

module.exports = (prisma) => {

  // = student routes =
  router.get('/', async (req, res) => {
    const students = await prisma.student.findMany({ include: { submissions: true } });
    res.json(students);
  });

  router.get('/:id', async (req, res) => {
    const student = await prisma.student.findUnique({ where: { id: +req.params.id }, include: { submissions: true } });
    res.json(student);
  });

  // create student
  router.post('/', async (req, res) => {
    const student = await prisma.student.create({ data: req.body });
    res.json(student);
  });


  prisma.$disconnect();
  return router;
};
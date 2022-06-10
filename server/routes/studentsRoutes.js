const router = require('express').Router();

module.exports = (prisma) => {
  router.get('/', async (req, res) => {
    const students = await prisma.student.findMany();
    res.json(students);
  });

  router.post('/', async (req, res) => {
    const student = await prisma.student.create({ data: req.body });
    res.json(student);
  });

  return router;
};

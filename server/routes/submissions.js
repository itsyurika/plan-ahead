const router = require('express').Router();

module.exports = (prisma) => {
  // creates relation for all students
  router.post('/', async (req, res) => {
    const students = await prisma.student.findMany();
    const data = students.map((student) => ({
      dueDate: req.body.dueDate,
      studentId: +student.id,
      assignmentId: +req.body.assignmentId,
    }));

    const submissions = await prisma.submission.createMany({ data });
    res.json(submissions);
  });

  router.patch('/:id', async (req, res) => {
    const updatedSubmission = await prisma.submission.update({ where: { id: +req.params.id }, data: req.body });
    res.json(updatedSubmission);
  });

  prisma.$disconnect();
  return router;
};
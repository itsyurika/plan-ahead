const router = require('express').Router();

module.exports = (prisma) => {
  // creates relation for all students
  router.post('/', async (req, res) => {
    const students = await prisma.student.findMany();
    const submissions = await prisma.$transaction(students.map((user) => prisma.submission.create({
      data: {
        dueDate: req.body.dueDate,
        studentId: +user.id,
        assignmentId: +req.body.assignmentId,
      }
    })));
    res.json(submissions);
  });

  router.patch('/:id', async (req, res) => {
    const updatedSubmission = await prisma.submission.update({ where: { id: +req.params.id }, data: req.body });
    res.json(updatedSubmission);
  });

  prisma.$disconnect();
  return router;
};
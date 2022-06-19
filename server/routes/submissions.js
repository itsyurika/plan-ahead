const router = require('express').Router();
const { addDays, parseISO } = require('date-fns');

module.exports = (prisma) => {
  // creates relation for all students
  router.post('/', async (req, res) => {
    const students = await prisma.student.findMany({
      include: {
        Group: true
      }
    });
   
    const submissions = await prisma.$transaction(students.map((user) => prisma.submission.create({
      data: {
        dueDate: addDays(parseISO((req.body.dueDate)), user.Group.dateAdjustment),
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
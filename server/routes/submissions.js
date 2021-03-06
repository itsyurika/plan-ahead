const router = require('express').Router();
const { addDays, parseISO } = require('date-fns');

module.exports = (prisma) => {
  // creates relation entry for all students
  router.post('/', async (req, res) => {
    const students = await prisma.student.findMany({ include: { group: true } });
    const submissions = await prisma.$transaction(students.map((user) => prisma.submission.create({
      data: {
        dueDate: addDays(parseISO(req.body.dueDate), +user.group.dateAdjustment),
        studentId: +user.id,
        assignmentId: +req.body.assignmentId,
      }
    })));
    res.json(submissions);
  });


  // patch all
  router.patch('/', async (req, res) => {
    const submissionsList = await prisma.submission.findMany({ where: { assignmentId: +req.body.id }, include: { student: { include: { group: true } } } });
    const submissions = await prisma.$transaction(submissionsList.map((item) => prisma.submission.update({
      where: { id: item.id }, data: { dueDate: addDays(parseISO(req.body.defaultDueDate), +item.student.group.dateAdjustment) }
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
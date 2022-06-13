const router = require('express').Router();

module.exports = (prisma) => {

  // = student routes =
  router.get('/', async (req, res) => {
    const students = await prisma.student.findMany();
    res.json(students);
  });

  router.get('/:id', async (req, res) => {
    const student = await prisma.student.findUnique({ where: { id: +req.params.id }, include: { studentAssignments: true } });
    res.json(student);
  });

  // create student
  router.post('/', async (req, res) => {
    const student = await prisma.student.create({ data: req.body });
    res.json(student);
  });


  // = assignments routes =
  // update student's assignment
  router.patch('/:id/assignments/:assignmentId', async (req, res) => {
    const options = {
      where: {
        studentAssignmentId: {
          assignmentId: +req.params.assignmentId,
          studentId: +req.body.id
        }
      }, data: req.body
    };

    const updatedAssign = await prisma.studentAssignment.update(options);
    res.json(updatedAssign);
  });

  prisma.$disconnect();
  return router;
};

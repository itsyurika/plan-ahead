const router = require('express').Router();

module.exports = (prisma) => {
  const { assignment, studentAssignment } = prisma;
  router.get('/', async (req, res) => {
    const assignments = await assignment.findMany({
      include: { subject: true },
    });
    res.json(assignments);
  });

  router.post('/', async (req, res) => {
    const newAssignment = await assignment.create({ data: req.body });
    res.json(newAssignment);
  });

  router.patch('/:id', async (req, res) => {
    const options = {
      where: {
        studentAssignmentId: {
          assignmentId: +req.params.id,
          studentId: +req.body.studentId
        }
      }, data: req.body
    };

    const updatedAssign = await studentAssignment.update(options);
    res.json(updatedAssign);
  });

  return router;
};
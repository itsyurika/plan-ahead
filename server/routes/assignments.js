const router = require('express').Router();

module.exports = (prisma) => {
  const { assignment, submission } = prisma;

  router.get('/', async (req, res) => {
    const assignments = await assignment.findMany({ include: { subject: true }, });
    res.json(assignments);
  });

  router.post('/', async (req, res) => {
    console.log("req.body:", req.body);
    const newAssignment = await assignment.create({ data: req.body });
    res.json(newAssignment);
  });

  router.delete('/:id', async (req, res) => {
    console.log("Assignment: " + req.params.id + " is deleted 🗑️");
    await assignment.delete({
      where: {
        id: +req.params.id
      }
    });

  });


  router.patch('/:id', async (req, res) => {
    console.log("assignment updated with the following data: ", req.body);
    const options = {
      where: { id: +req.params.id }, data: req.body
    };
    const updatedAssign = await submission.update(options);
    res.json(updatedAssign);
  });

  router.put('/:id', async (req, res) => {
    const options = {
      where: {
        id: +req.params.id,
      }, data: req.body
    };

    const updatedAssign = await assignment.update(options);
    res.json(updatedAssign);
  });
  prisma.$disconnect();
  return router;
};
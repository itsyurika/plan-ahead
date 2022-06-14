const router = require('express').Router();

module.exports = (prisma) => {
  router.patch('/:id', async (req, res) => {
    const updatedSubmission = await prisma.submission.update({ where: { id: +req.params.id }, data: req.body });
    res.json(updatedSubmission);
  });


  prisma.$disconnect();
  return router;
};
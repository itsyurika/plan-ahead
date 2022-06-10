const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

getAllStudents()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


module.exports = { getAllStudents };
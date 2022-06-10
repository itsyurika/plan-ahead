const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


const createStudent = async () => {
  await prisma.students.create({
    data: {
      first_name: 'Alice',
      last_name: 'bobby',
      email: 'alice@prisma.io',
      password: 'heeey',
    },
  })
};


const getAllStudents = () => {
  return prisma.students.findMany()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      prisma.$disconnect();
    });
};

module.exports = { getAllStudents, createStudent };
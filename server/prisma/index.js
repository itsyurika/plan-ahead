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



const createAssignment = async () => {
  await prisma.assignments.create({
    data: {
      name: 'assignment1',
      teacher_id:  1,
      subject_id:  2,
      description: 'neeew assignment',
      url: 'www.google.ca',
    },
  })
};


const getAllAssignments = () => {
  return prisma.assignments.findMany()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      prisma.$disconnect();
    });
};


module.exports = { getAllStudents, createStudent, createAssignment,  getAllAssignments  };
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



const createAssignment = async (data) => {
  await prisma.assignments.create({data})
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

const getStudentAssignments = (id) => {
  return prisma.studentAssignments.findUnique({
    where: {
      student_id: id
    },
  })
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      prisma.$disconnect();
    });
};


module.exports = { getAllStudents, createStudent, createAssignment,  getAllAssignments, getStudentAssignments  };
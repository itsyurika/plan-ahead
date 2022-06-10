const createStudent = async (data) => {

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
  await prisma.assignments.create({ data });
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
  return prisma.studentAssignments.findMany({
    where: {
      student_id: id
    },
    include: {
      assignment: true
    },
  })
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      prisma.$disconnect();
    });
};


module.exports = { getAllStudents, createStudent, createAssignment, getAllAssignments, getStudentAssignments };
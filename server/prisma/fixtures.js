const teacher = [
  { id: 1, firstName: 'pickle 1', lastName: 'rickle 1', email: 'rick.sandchez@gmail.com', password: 'picklerick' },
  { id: 2, firstName: 'pickle 2', lastName: 'rickle 2', email: 'lisa.simpson@gmail.com', password: 'ehhhhh' },
  { id: 3, firstName: 'pickle 3', lastName: 'rickle 3', email: 'link@yahoo.com', password: 'hyrule' },
];

const student = [
  { id: 1, firstName: 'jam', lastName: 'pineapple', email: 'jam@gmail.com', password: '123' },
  { id: 2, firstName: 'potato', lastName: 'sausage', email: 'potato@gmail.com', password: '123' },
  { id: 3, firstName: 'onion', lastName: 'layers', email: 'onion@yahoo.com', password: '123' },
];

const subject = [
  { id: 1, name: 'Math' },
  { id: 2, name: 'History' },
];

const assignment = [
  { id: 1, title: 'assignment1', description: 'my description', url: 'www.google.ca', teacherId: 1, subjectId: 1 },
  { id: 2, title: 'assignment2', description: 'my description', url: 'www.intergalacticebay.gl', teacherId: 1, subjectId: 1 },
  { id: 3, title: 'assignment3', description: 'my description', url: 'www.plumbus.gl', teacherId: 1, subjectId: 1 },
  { id: 4, title: 'assignment4', description: 'my description', url: 'www.fedaration.com', teacherId: 1, subjectId: 2 },
  { id: 5, title: 'assignment5', description: 'my description', url: 'www.torontopubliclibrary.ca', teacherId: 1, subjectId: 2 },
  { id: 6, title: 'assignment6', description: 'my description', url: 'www.ontario.ca', teacherId: 2, subjectId: 2 },
];

const studentAssignment = [
  { id: 1, dueDate: new Date('2022-04-27'), dateStarted: new Date('2022-04-24'), dateCompleted: null, studentId: 1, assignmentId: 2 },
  { id: 2, dueDate: new Date('2022-04-23'), dateStarted: new Date('2022-04-21'), dateCompleted: new Date('2022-04-22'), studentId: 1, assignmentId: 3 },
  { id: 3, dueDate: new Date('2022-04-29'), dateStarted: null, dateCompleted: null, studentId: 2, assignmentId: 4 },
];

module.exports = { teacher, student, subject, assignment, studentAssignment };
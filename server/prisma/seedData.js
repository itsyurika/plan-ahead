const {
  addDays
} = require("date-fns");

const teacher = [
  { firstName: 'pickle 1', lastName: 'rickle 1', email: 'rick.sandchez@gmail.com', password: 'picklerick' },
  { firstName: 'pickle 2', lastName: 'rickle 2', email: 'lisa.simpson@gmail.com', password: 'ehhhhh' },
  { firstName: 'pickle 3', lastName: 'rickle 3', email: 'link@yahoo.com', password: 'hyrule' },
];

const student = [
  { firstName: 'jam', lastName: 'pineapple', email: 'jam@gmail.com', password: '123' },
  { firstName: 'potato', lastName: 'sausage', email: 'potato@gmail.com', password: '123' },
  { firstName: 'onion', lastName: 'layers', email: 'onion@yahoo.com', password: '123' },
];

const subject = [
  { name: 'Math' },
  { name: 'History' },
];

const assignment = [
  { defaultDueDate: new Date('Jun 07 2022 12:00:00'), title: 'assignment1', description: 'my description', url: 'www.google.ca', teacherId: 1, subjectId: 1 },
  { defaultDueDate: new Date('Jun 07 2022 12:00:00'), title: 'assignment2', description: 'my description', url: 'www.intergalacticebay.gl', teacherId: 1, subjectId: 1 },
  { defaultDueDate: new Date('Jun 08 2022 12:00:00'), title: 'assignment3', description: 'my description', url: 'www.plumbus.gl', teacherId: 1, subjectId: 1 },
  { defaultDueDate: new Date('Jun 08 2022 12:00:00'), title: 'assignment4', description: 'my description', url: 'www.fedaration.com', teacherId: 1, subjectId: 2 },
  { defaultDueDate: new Date('Jun 09 2022 12:00:00'), title: 'assignment5', description: 'my description', url: 'www.torontopubliclibrary.ca', teacherId: 1, subjectId: 2 },
  { defaultDueDate: new Date('Jun 09 2022 12:00:00'), title: 'assignment6', description: 'my description', url: 'www.ontario.ca', teacherId: 2, subjectId: 2 },
];

const studentAssignment = [
  { dueDate: addDays(new Date(), 2), dateStarted: new Date('Jun 01 2022 12:00:00'), dateCompleted: null, studentId: 1, assignmentId: 1 },
  { dueDate: addDays(new Date(), 1), dateStarted: new Date('Jun 01 2022 12:00:00'), dateCompleted: new Date('Jun 02 2022 12:00:00'), studentId: 1, assignmentId: 3 },
  { dueDate: addDays(new Date(), 3), dateStarted: null, dateCompleted: null, studentId: 1, assignmentId: 2 },
  { dueDate: addDays(new Date(), 3), dateStarted: null, dateCompleted: null, studentId: 2, assignmentId: 2 },
  { dueDate: addDays(new Date(), 5), dateStarted: null, dateCompleted: null, studentId: 2, assignmentId: 4 },
];

module.exports = { teacher, student, subject, assignment, studentAssignment };
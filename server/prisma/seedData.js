const teacher = [
  { firstName: 'Ms.', lastName: 'Clarino', email: 'rick.sandchez@gmail.com', password: 'picklerick' },
  { firstName: 'Ms.', lastName: 'Yama', email: 'lisa.simpson@gmail.com', password: 'ehhhhh' },
  { firstName: 'Mr.', lastName: 'Matthews', email: 'link@yahoo.com', password: 'hyrule' },
];

const group = [
  { name: 'default', dateAdjustment: 0},
  { name: 'LD students', dateAdjustment: 7},
];

const student = [
  { firstName: 'Sarah', lastName: 'Carter', email: 'jam@gmail.com', password: '123', groupId: 2 },
  { firstName: 'Jose', lastName: 'Federico', email: 'onion@yahoo.com', password: '123', groupId: 2 },
  { firstName: 'Jake', lastName: 'Powell', email: 'onion2@yahoo.com', password: '123', groupId: 2 },
  { firstName: 'Kayla', lastName: 'Wong', email: 'onion3@yahoo.com', password: '123', groupId: 2 },
  { firstName: 'Mikhail', lastName: 'Dmitrivic', email: 'potato@gmail.com', password: '123', groupId: 1 },
  { firstName: 'Andile', lastName: 'Nika', email: 'aanika@gmail.com', password: '123', groupId: 1 },
  { firstName: 'Lukas', lastName: 'Sulaiman', email: 'lukasss@gmail.com', password: '123', groupId: 1 }
];

const subject = [
  { name: 'Art' },
  { name: 'English' },
  { name: 'History' },
  { name: 'Math' },
  { name: 'Science' },
];

const assignment = [
  {
    defaultDueDate: new Date('2022-06-21T06:00:00'),
    title: 'Portraits',
    description: 'Draw, Paint or Sketch a potrait of a friend or of yourself in the mirror.  Remember what we learned about shading.',
    url: 'https://classroom.google.com/u/0/h',
    teacherId: 1,
    subjectId: 1
  },
  {
    defaultDueDate: new Date('2022-06-17T06:00:00'),
    title: 'Watercolours',
    description: 'Make a watercolour painting.  You can paint anything you want.  Remember it might help to trace out what you want to paint first lightly in pencil',
    url: 'https://classroom.google.com/u/0/h',
    teacherId: 1,
    subjectId: 1
  },
  {
    defaultDueDate: new Date('2022-06-20T06:00:00'),
    title: "Isn't It Ironic?",
    description: 'Click on the google classroom link, and listen to the three scenarios.  Can you create a definition of what irony is?',
    url: 'https://classroom.google.com/u/0/h',
    teacherId: 1,
    subjectId: 2
  },
  {
    defaultDueDate: new Date('2022-06-17T06:00:00'),
    title: "Verbs, Adverbs & Proverbs?",
    description: 'Refer to the handout, or check out the google link for examples.  Highlight the verbs and adverbs in the given sentence.  Make up 3 sentences and using verbs and adverbs.',
    url: 'https://classroom.google.com/u/0/h',
    teacherId: 1,
    subjectId: 2
  },
  {
    defaultDueDate: new Date('2022-06-23T06:00:00'),
    title: 'World War II',
    description: 'This is your essay project!  Write a short essay about World War II.  If you need help deciding on a topic, you can refer to the handout in class, or the google classroom link.  Remember an essay has a thesis statement in the introduction, three paragraphs, and a conclusion.',
    url: 'https://classroom.google.com/u/0/h',
    teacherId: 1,
    subjectId: 3
  },
  {
    defaultDueDate: new Date('2022-06-16T06:00:00'),
    title: 'World History',
    description: "Research a country and write about some of it's history.  The more details you have the better, and then we'll share what we learned with the rest of the class.",
    url: 'https://classroom.google.com/u/0/h',
    teacherId: 1,
    subjectId: 3
  },
  {
    defaultDueDate: new Date('2022-06-24T06:00:00'),
    title: 'Fractions - Multiplication',
    description: 'Fill out the handout from class, or get it from the google classroom link.  Remember: The first step when multiplying fractions is to multiply the two numerators. The second step is to multiply the two denominators. Finally, simplify the new fractions. The fractions can also be simplified before multiplying by factoring out common factors in the numerator and denominator.', url: 'https://classroom.google.com/u/0/h',
    teacherId: 1,
    subjectId: 4
  },
  {
    defaultDueDate: new Date('2022-06-20T06:00:00'),
    title: 'Fractions - Decimals',
    description: 'This is a review of how fractions work.  Fill out the handout from class, or get one from the google classroom link.  Convert the fractions into decimals, and the decimals into fractions.',
    url: 'https://classroom.google.com/u/0/h',
    teacherId: 1,
    subjectId: 4
  },
  {
    defaultDueDate: new Date('2022-06-21T06:00:00'),
    title: 'Periodic Table - Elements',
    description: 'Look up an element in the periodic table.  What is it called?  What is the atomic weight? What else can you find out about it?',
    url: 'https://classroom.google.com/u/0/h',
    teacherId: 1,
    subjectId: 5
  },
  {
    defaultDueDate: new Date('2022-06-28T06:00:00'),
    title: 'Electrons, Protons, and Neutrons',
    description: 'Last week we looked at atoms, and how they formed molecules and made up all the stuff around us.  Atoms, are actually made up of even smaller particles.  Read the assignment on google classroom to learn about all three.  Make sure to fill in the hand out or print out another explaining what all three subatomic particles are.',
    url: 'https://classroom.google.com/u/0/h',
    teacherId: 1,
    subjectId: 5
  },
];

const submission = [
  { dueDate: assignment[0].defaultDueDate, dateStarted: new Date('2022-06-13T06:00:00'), dateCompleted: new Date('2022-06-15T06:00:00'), studentId: 1, assignmentId: 1 },
  { dueDate: assignment[1].defaultDueDate, dateStarted: new Date('2022-06-13T06:00:00'), dateCompleted: new Date('2022-06-15T06:00:00'), studentId: 1, assignmentId: 2 },
  { dueDate: assignment[2].defaultDueDate, dateStarted: new Date('2022-06-13T06:00:00'), dateCompleted: null, studentId: 1, assignmentId: 3 },
  { dueDate: assignment[3].defaultDueDate, dateStarted: new Date('2022-06-13T06:00:00'), dateCompleted: new Date('2022-06-15T06:00:00'), studentId: 1, assignmentId: 4 },
  { dueDate: assignment[5].defaultDueDate, dateStarted: new Date('2022-06-13T06:00:00'), dateCompleted: new Date('2022-06-15T06:00:00'), studentId: 1, assignmentId: 6 },
  { dueDate: assignment[6].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 1, assignmentId: 7 },
  { dueDate: assignment[7].defaultDueDate, dateStarted: new Date('2022-06-13T06:00:00'), dateCompleted: new Date('2022-06-15T06:00:00'), studentId: 1, assignmentId: 8 },
  { dueDate: assignment[8].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 1, assignmentId: 9 },
  { dueDate: assignment[9].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 1, assignmentId: 10 },
  { dueDate: assignment[0].defaultDueDate, dateStarted: new Date('2022-06-13T06:00:00'), dateCompleted: new Date('2022-06-15T06:00:00'), studentId: 2, assignmentId: 1 },
  { dueDate: assignment[1].defaultDueDate, dateStarted: new Date('2022-06-13T06:00:00'), dateCompleted: new Date('2022-06-15T06:00:00'), studentId: 2, assignmentId: 2 },
  { dueDate: assignment[2].defaultDueDate, dateStarted: new Date('2022-06-13T06:00:00'), dateCompleted: new Date('2022-06-15T06:00:00'), studentId: 2, assignmentId: 3 },
  { dueDate: assignment[3].defaultDueDate, dateStarted: new Date('2022-06-13T06:00:00'), dateCompleted: new Date('2022-06-15T06:00:00'), studentId: 2, assignmentId: 4 },
  { dueDate: assignment[4].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 2, assignmentId: 5 },
  { dueDate: assignment[5].defaultDueDate, dateStarted: new Date('2022-06-13T06:00:00'), dateCompleted: new Date('2022-06-15T06:00:00'), studentId: 2, assignmentId: 6 },
  { dueDate: assignment[6].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 2, assignmentId: 7 },
  { dueDate: assignment[7].defaultDueDate, dateStarted: new Date('2022-06-13T06:00:00'), dateCompleted: new Date('2022-06-15T06:00:00'), studentId: 2, assignmentId: 8 },
  { dueDate: assignment[8].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 2, assignmentId: 9 },
  { dueDate: assignment[9].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 2, assignmentId: 10 },
  { dueDate: assignment[0].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 3, assignmentId: 1 },
  { dueDate: assignment[1].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 3, assignmentId: 2 },
  { dueDate: assignment[2].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 3, assignmentId: 3 },
  { dueDate: assignment[3].defaultDueDate, dateStarted: new Date('2022-06-13T06:00:00'), dateCompleted: new Date('2022-06-15T06:00:00'), studentId: 3, assignmentId: 4 },
  { dueDate: assignment[4].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 3, assignmentId: 5 },
  { dueDate: assignment[5].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 3, assignmentId: 6 },
  { dueDate: assignment[6].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 3, assignmentId: 7 },
  { dueDate: assignment[7].defaultDueDate, dateStarted: new Date('2022-06-13T06:00:00'), dateCompleted: new Date('2022-06-15T06:00:00'), studentId: 3, assignmentId: 8 },
  { dueDate: assignment[8].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 3, assignmentId: 9 },
  { dueDate: assignment[9].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 3, assignmentId: 10 },
  { dueDate: assignment[0].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 4, assignmentId: 1 },
  { dueDate: assignment[1].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 4, assignmentId: 2 },
  { dueDate: assignment[2].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 4, assignmentId: 3 },
  { dueDate: assignment[3].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 4, assignmentId: 4 },
  { dueDate: assignment[4].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 4, assignmentId: 5 },
  { dueDate: assignment[5].defaultDueDate, dateStarted: new Date('2022-06-13T06:00:00'), dateCompleted: null, studentId: 4, assignmentId: 6 },
  { dueDate: assignment[6].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 4, assignmentId: 7 },
  { dueDate: assignment[7].defaultDueDate, dateStarted: new Date('2022-06-13T06:00:00'), dateCompleted: new Date('2022-06-15T06:00:00'), studentId: 4, assignmentId: 8 },
  { dueDate: assignment[8].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 4, assignmentId: 9 },
  { dueDate: assignment[9].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 4, assignmentId: 10 },
  { dueDate: assignment[0].defaultDueDate, dateStarted: new Date('2022-06-13T06:00:00'), dateCompleted: null, studentId: 5, assignmentId: 1 },
  { dueDate: assignment[1].defaultDueDate, dateStarted: new Date('2022-06-13T06:00:00'), dateCompleted: null, studentId: 5, assignmentId: 2 },
  { dueDate: assignment[2].defaultDueDate, dateStarted: new Date('2022-06-13T06:00:00'), dateCompleted: null, studentId: 5, assignmentId: 3 },
  { dueDate: assignment[3].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 5, assignmentId: 4 },
  { dueDate: assignment[4].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 5, assignmentId: 5 },
  { dueDate: assignment[5].defaultDueDate, dateStarted: new Date('2022-06-13T06:00:00'), dateCompleted: null, studentId: 5, assignmentId: 6 },
  { dueDate: assignment[6].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 5, assignmentId: 7 },
  { dueDate: assignment[7].defaultDueDate, dateStarted: new Date('2022-06-13T06:00:00'), dateCompleted: new Date('2022-06-15T06:00:00'), studentId: 5, assignmentId: 8 },
  { dueDate: assignment[8].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 5, assignmentId: 9 },
  { dueDate: assignment[9].defaultDueDate, dateStarted: null, dateCompleted: null, studentId: 5, assignmentId: 10 },
];

module.exports = { teacher, group, student, subject, assignment, submission};
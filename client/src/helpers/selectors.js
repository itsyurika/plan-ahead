import axios from "axios";

export const buildTeacherCards = (assignments, id) => {
  const newCards = assignments.map((item) => ({
    ...item,
    column: new Date(item.defaultDueDate).getDay() + 2, // monday column starts at 3
    assigned: item.studentAssignments.find(({ studentId }) => studentId === id),
  }));

  const count = {};
  newCards.forEach((item) => {
    if (!count[item.column]) count[item.column] = 1;
    item.row = count[item.column];
    count[item.column]++;
  });

  return newCards;
};

const getStatus = (item) => {
  if (item.dateCompleted) return 'Complete';
  if (item.dateStarted) return 'Started';
  return 'Not started';
};

export const buildStudentCards = (assignments, student) => {
  if (!assignments.length || !student.id) return [];
  const foundAssignments = student.studentAssignments.map((item) => ({
    ...assignments.find((assign) => assign.id === item.assignmentId),
    assigned: { ...item },
    status: getStatus(item),
  }));

  return foundAssignments;
};

export const getTablePosition = (assignments) => {
  if (!assignments?.length) return [];
  const newCards = assignments.map((item) => ({
    ...item,
    column: new Date(item.defaultDueDate).getDay() + 2, // monday column starts at 3
  }));

  const count = {};
  newCards.forEach((item) => {
    if (!count[item.column]) count[item.column] = 1;
    item.row = count[item.column];
    count[item.column]++;
  });

  return newCards;
};
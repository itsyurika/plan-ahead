import { isSameDay, parseISO } from "date-fns";

// = local helpers =
const getStatus = (item) => {
  if (item.dateCompleted) return 'Complete';
  if (item.dateStarted) return 'Started';
  return 'Not started';
};


// = exported helpers =
export const getTablePositions = (assignments) => {
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

export const getAssignmentsForDay = (assignments, day) => {
  if (!assignments?.length) return [];

  const assignForDay = assignments.filter((item) => 
    isSameDay(parseISO(item.assigned.dueDate), day)
  );

  return assignForDay;
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
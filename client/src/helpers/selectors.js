import { isSameDay, parseISO, addDays, startOfWeek } from "date-fns";

// = local helpers =
const getStatus = (item) => {
  if (item.dateCompleted) return 'Complete';
  if (item.dateStarted) return 'Started';
  return 'Not started';
};


// = exported helpers =
export const findAssigned = (assignments, student) => {
  if (!student.id) return assignments.map((item) => ({ ...item, assigned: { dueDate: item.defaultDueDate } }));

  return student.studentAssignments.map((item) => ({
    ...assignments.find((assign) => assign.id === item.assignmentId),
    assigned: { ...item },
    status: getStatus(item),
  }));
};

export const getDatesForWeek = (date) => {
  const startDate = startOfWeek(date, { weekStartsOn: 1 });
  return [...Array(5)].map((_, i) => addDays(startDate, i));
};

export const sortAssignmentsByDay = (assignments, week) => {
  const sorted = assignments.sort((a, b) => parseISO(a.assigned.dueDate || a.defaultDueDate) - parseISO(b.assigned.dueDate || b.defaultDueDate));
  return week.map((day) => sorted.filter((item) => isSameDay(parseISO(item.assigned.dueDate), day))
  );
};
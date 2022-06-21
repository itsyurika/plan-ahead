import { isSameDay, parseISO, addDays, startOfWeek, endOfDay } from 'date-fns';

// = local helpers =
const getStatus = (submission) => {
  if (submission.dateCompleted) return 'Complete';
  if (submission.dateStarted) return 'Started';
  return 'Not started';
};

// = exported helpers =
export const mapAssignments = (assignments, student) => {
  if (!student.id) return assignments.map((item) => ({ ...item, defaultDueDate: parseISO(item.defaultDueDate), assigned: { dueDate: parseISO(item.defaultDueDate) } }));

  return student.submissions.map((submission) => ({
    ...assignments.find((assign) => assign.id === submission.assignmentId),
    assigned: { ...submission, dueDate: parseISO(submission.dueDate) },
    status: getStatus(submission),
  }));
};

export const getDatesForWeek = (date) => {
  const startDate = startOfWeek(date, { weekStartsOn: 1 });
  return [...Array(7)].map((_, i) => addDays(endOfDay(startDate), i)); // end of day so timezone doesn't flip
};

export const sortAssignmentsByDay = (assignments, week) => {
  return week.map((day) => assignments.filter((item) => isSameDay(item.assigned.dueDate, day)));
};
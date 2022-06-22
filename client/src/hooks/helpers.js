import { isSameDay, parseISO, addDays, startOfWeek, endOfDay } from 'date-fns';

// = local helpers =
const getStatus = (submission) => {
  if (submission.dateCompleted) return 'Complete';
  if (submission.dateStarted) return 'Started';
  return 'Not started';
};

const findMatchingSubmission = (student, submissions) => {
  return submissions.find((updated) => updated.studentId === student.id) || null;
};

const buildStudentSubmissions = (student, submission) => {
  return student.submissions.map((old) => old.id === submission.id ? { ...submission } : { ...old });
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

// selectors for assignments
export const getDatesForWeek = (date) => {
  const startDate = startOfWeek(date, { weekStartsOn: 1 });
  return [...Array(7)].map((_, i) => addDays(endOfDay(startDate), i)); // end of day so timezone doesn't flip
};

export const sortAssignmentsByDate = (assignments) => {
  return assignments.sort((a, b) => a.assigned.dueDate - b.assigned.dueDate);
};

export const filterAssignmentsByDay = (assignments, week) => {
  return week.map((day) => assignments.filter((item) => isSameDay(item.assigned.dueDate, day)));
};


// build state objects
export const buildNewStudent = (student, submissions) => {
  const newData = findMatchingSubmission(student, submissions);
  return { ...student, submissions: newData ? buildStudentSubmissions(student, newData) : student.submissions };
};
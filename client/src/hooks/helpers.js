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

// = exported helpers =

// build state objects
export const updateStudent = (student, submission) => {
  const submissions = student.submissions.map((old) => old.id === submission.id ? { ...submission } : { ...old });
  return { ...student, submissions };
};

// update state
const addAssignmentToState = (data) => {
  setState((prev) => {
    const assignments = [...prev.assignments, { ...data }];
    return { ...prev, assignments, };
  });
  return data;
};

const updateAssignmentState = (data) => {
  setState((prev) => {
    const assignments = prev.assignments.map((assignment) => assignment.id === data.id ? { ...data } : { ...assignment });
    return { ...prev, assignments, };
  });
  return data;
};

const removeAssignmentFromState = (data) => {
  setState((prev) => {
    const assignments = prev.assignments.filter((assignment) => assignment.id !== data.id);
    return { ...prev, assignments, };
  });
  return data;
};

const removeSubmissionFromStudentState = (data) => {
  setState((prev) => {
    // update current student
    const submissions = [...prev.student.submissions.filter((submission) => submission.assignmentId !== data.id)];
    const student = { ...prev.student, submissions };

    // update rest of students
    const students = prev.students.map((student) => ({ ...student, submissions: [...student.submissions.filter((submission) => submission.assignmentId !== data.id)] }));
    return { ...prev, student, students };
  });
  return data;
};

const addSubmissionToStudentsState = (data) => {
  setState((prev) => {
    // update current student
    const submissions = [...prev.student.submissions, { ...data.find(({ studentId }) => studentId === prev.student.id), }];
    const student = { ...prev.student, submissions };

    // update rest of students
    const students = prev.students.map((student) => ({ ...student, submissions: [...student.submissions, { ...data.find(({ studentId }) => studentId === student.id) }] }));
    return { ...prev, student, students };
  });
  return data;
};


const updateAllSubmissionsState = (data) => {
  setState((prev) => {
    const student = buildNewStudent(prev.student, data);
    const students = prev.students.map((student) => builddNewStudent(student, data));

    return { ...prev, student, students };
  });
};

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

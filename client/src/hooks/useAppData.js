import axios from "axios";
import { useState, useEffect } from "react";
import { parseISO, isBefore } from 'date-fns';
import { findAssigned } from 'hooks/helpers';

export function useAppData() {
  const [state, setState] = useState({
    admin: false,
    teacherId: 1,
    studentId: 1,
    student: {},
    assignments: [],
    newAssignment: {},
    focused: null,
    isPopupOpen: true,
    view: false
  });

  useEffect(() => {
    Promise.all([
      axios.get(`/teachers/${state.teacherId}/assignments`),
      axios.get(`/students/${state.studentId}`),
    ])
      .then((res) => {
        setState({ ...state, assignments: res[0].data, student: res[1].data });
      }).catch((e) => { console.error(e); });
  }, []);


  // view lookup
  const filterList = (assignment) => {
    if (state.view === 'pastDue') return !assignment.assigned.dateCompleted && isBefore(parseISO(assignment.assigned.dueDate), new Date());
    if (state.view === 'complete') return assignment.assigned.dateCompleted;
    if (state.view === 'art') return assignment.subject.name === 'Art';
    if (state.view === 'english') return assignment.subject.name === 'English';
    if (state.view === 'history') return assignment.subject.name === 'History';
    if (state.view === 'math') return assignment.subject.name === 'Math';
    if (state.view === 'science') return assignment.subject.name === 'Science';
  };

  // set state
  const togglePopup = () => { setState((prev) => ({ ...prev, isPopupOpen: !prev.isPopupOpen })); };
  const setAdmin = () => { setState((prev) => ({ ...prev, admin: !prev.admin, })); };
  const setFocused = (id) => { setState((prev) => ({ ...prev, focused: id, })); };
  const setView = (view) => { setState((prev) => ({ ...prev, view })); };
  const showCreateForm = (day) => {
    setState((prev) => ({
      ...prev, newAssignment:
        { day, teacherId: state.teacherId, },
    }));
    setFocused(-1);
  };


  // update state
  const addAssignmentToState = (data) => {
    setState((prev) => {
      const assignments = [...state.assignments, { ...data }];
      return { ...prev, assignments, };
    });
    return data;
  };

  const updateAssignmentState = (data) => {
    setState((prev) => {
      const assignments = state.assignments.map((assignment) => assignment.id === data.id ? { ...data } : { ...assignment });
      return { ...prev, assignments, };
    });
    return data;
  };

  const addSubmissionToStudentState = (data) => {
    const submission = data.find((submission) => submission.studentId === state.studentId);
    setState((prev) => {
      const submissions = [...state.student.submissions, { ...submission }];
      const student = { ...prev.student, submissions };
      return { ...prev, student, };
    });
    return data;
  };

  const updateSubmissionState = (data) => {
    setState((prev) => {
      const submissions = state.student.submissions.map((submission) => submission.id === data.id ? { ...data } : { ...submission });
      const student = { ...prev.student, submissions };
      return { ...prev, student, };
    });
    return data;
  };


  // api requests
  const postAssignment = async (body) => {
    const { data: assignment } = await axios.post('/assignments', body);
    addAssignmentToState(assignment);
    postSubmission(assignment);
    return assignment;
  };

  const putAssignment = async (id, body) => {
    const { data: assignment } = await axios.put(`/assignments/${id}`, body);
    updateAssignmentState(assignment);
    return assignment;
  };

  const postSubmission = async (body) => {
    const { data: submissions } = await axios.post('/submissions', { assignmentId: body.id, dueDate: body.defaultDueDate });
    addSubmissionToStudentState(submissions);
    return submissions;
  };

  const patchSubmission = async (id, body) => {
    const { data: submission } = await axios.patch(`/submissions/${id}`, body);
    updateSubmissionState(submission);
    return submission;
  };


  // find and filter assignments
  const foundAssignments = findAssigned(state.assignments, !state.admin && state.student);
  const assignmentList = state.view ? foundAssignments.filter(filterList) : foundAssignments;
  const focusedAssignment = state.focused === -1 ? state.newAssignment : assignmentList.find((assignment) => assignment.id === state.focused);

  return {
    // from state
    admin: state.admin,
    student: state.student,
    isPopupOpen: state.isPopupOpen,
    view: state.view,
    // end state

    assignmentList,
    focusedAssignment,
    setFocused,
    setAdmin,
    setView,
    showCreateForm,
    togglePopup,
    postAssignment,
    putAssignment,
    patchSubmission,
  };
};
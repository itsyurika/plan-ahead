import axios from "axios";
import { useState, useEffect } from "react";
import { parseISO, isBefore } from 'date-fns';
import { mapAssigned } from 'hooks/helpers';

export function useAppData() {
  const [state, setState] = useState({
    admin: false,
    teacherId: 1,
    studentId: 1,
    student: {},
    students: [],
    assignments: [],
    newAssignment: {},
    focused: null,
    isPopupOpen: true,
    view: null,
  });

  useEffect(() => {
    Promise.all([
      axios.get(`/teachers/${state.teacherId}/assignments`),
      axios.get(`/students/`)
    ])
      .then((res) => {
        setState({ ...state, assignments: res[0].data, students: res[1].data, student: res[1].data[0] });
      }).catch((e) => { console.error(e); });
  }, []);


  // set state
  const togglePopup = () => { setState((prev) => ({ ...prev, isPopupOpen: !prev.isPopupOpen })); };
  const closePopup = () => { setState((prev) => ({ ...prev, isPopupOpen: false })); };
  const setAdmin = () => { setState((prev) => ({ ...prev, admin: !prev.admin, })); };
  const setFocused = (id) => { setState((prev) => ({ ...prev, focused: id, })); };
  const setView = (view = null) => { setState((prev) => ({ ...prev, view })); };
  const setStudent = (id) => { setState((prev) => ({ ...prev, student: state.students.find((student) => student.id === id), })); };
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

  const removeAssignmentFromState = (data) => {
    setState((prev) => {
      const assignments = state.assignments.filter((assignment) => assignment.id !== data.id);
      return { ...prev, assignments, };
    });
    return data;
  };

  const addSubmissionToStudentsState = (data) => {
    const submission = data.find((submission) => submission.studentId === state.studentId);
    setState((prev) => {
      const submissions = [...state.student.submissions, { ...submission }];
      const student = { ...prev.student, submissions };
      const students = state.students.map((student) => ({ ...student, submissions: [...student.submissions, submission] }));
      return { ...prev, student, students };
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

  const deleteAssignment = async (id) => {
    const { data: assignment } = await axios.delete(`/assignments/${id}`);
    removeAssignmentFromState(assignment);
    return assignment;
  };

  const postSubmission = async (body) => {
    const { data: submissions } = await axios.post('/submissions', { assignmentId: body.id, dueDate: body.defaultDueDate });
    addSubmissionToStudentsState(submissions);
    return submissions;
  };

  const patchSubmission = async (id, body) => {
    const { data: submission } = await axios.patch(`/submissions/${id}`, body);
    updateSubmissionState(submission);
    return submission;
  };

  // view lookup
  const filterList = (assignment) => {
    if ([null, 'all', 'students',].includes(state.view)) return true; // retrieve all assignments
    if (state.view === 'pastDue') return !assignment.assigned.dateCompleted && isBefore(parseISO(assignment.assigned.dueDate), new Date());
    if (state.view === 'complete') return assignment.assigned.dateCompleted;
    if (state.view) return assignment.subject.name.toLowerCase() === state.view;
    return false; // no valid view ?
  };

  // find and filter assignments
  const foundAssignments = mapAssigned(state.assignments, (!state.admin || state.view === 'students') && state.student);
  const assignmentList = foundAssignments.filter(filterList);
  const focusedAssignment = state.focused === -1 ? state.newAssignment : assignmentList.find((assignment) => assignment.id === state.focused);

  return {
    // from state
    admin: state.admin,
    student: state.student,
    isPopupOpen: state.isPopupOpen,
    view: state.view,
    students: state.students,
    // end state

    assignmentList,
    focusedAssignment,
    setFocused,
    setStudent,
    setAdmin,
    setView,
    showCreateForm,
    togglePopup,
    postAssignment,
    putAssignment,
    deleteAssignment,
    patchSubmission,
    closePopup
  };
};
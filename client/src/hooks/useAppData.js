import axios from "axios";
import { useState, useEffect } from "react";
import { isBefore } from 'date-fns';
import { mapAssignments, updateStudent, } from 'hooks/helpers';

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
  const setStudent = (id) => { setState((prev) => ({ ...prev, student: prev.students.find((student) => student.id === id), })); };
  const showCreateForm = (day) => {
    setState((prev) => ({
      ...prev, newAssignment:
        { defaultDueDate: day, teacherId: prev.teacherId, },
    }));
    setFocused(-1);
  };


  // view lookup
  const filterList = (assignment) => {
    if ([null, 'all', 'students',].includes(state.view)) return true; // retrieve all assignments
    if (state.view === 'pastDue') return !assignment.assigned.dateCompleted && isBefore(assignment.assigned.dueDate, new Date());
    if (state.view === 'completed') return assignment.assigned.dateCompleted;
    if (state.view) return assignment.subject.name.toLowerCase() === state.view;
    return false; // no valid view ?
  };

  // find and filter assignments
  const foundAssignments = mapAssignments(state.assignments, (!state.admin || state.view === 'students') && state.student);
  const assignmentList = foundAssignments.filter(filterList);
  const focusedAssignment = state.focused === -1 ? state.newAssignment : assignmentList.find((assignment) => assignment.id === state.focused);

  //send reminder
  const send_sms = async () => {
    await axios.post(`/sendAlerts`);
  };


  // = api requests =

  // = assignment requests =
  // Create Form submit
  const postAssignment = async (body) => {
    const { data: assignment } = await axios.post('/assignments', body);
    addAssignmentToState(assignment);
    postSubmission(assignment);
    return assignment;
  };

  // Edit Form submit
  const putAssignment = async (id, body) => {
    const { data: assignment } = await axios.put(`/assignments/${id}`, body);
    updateAssignmentState(assignment);
    patchAllSubmissions(assignment);
    return assignment;
  };

  const deleteAssignment = async (id) => {
    const { data: assignment } = await axios.delete(`/assignments/${id}`);
    removeAssignmentFromState(assignment);
    removeSubmissionFromStudentState(assignment);
    return assignment;
  };


  // = submission requests =
  const postSubmission = async (body) => {
    const { data: submissions } = await axios.post('/submissions', { assignmentId: body.id, dueDate: body.defaultDueDate });
    addSubmissionToStudentsState(submissions);
    return submissions;
  };

  // updates submission for all students on Assignment edit
  const patchAllSubmissions = async (body) => {
    const { data: submissions } = await axios.patch(`/submissions/`, body);
    updateAllSubmissionsState(submissions);
    return submissions;
  };

  // updates time started and completed for one student
  const patchSubmission = async (id, body) => {
    const { data: submission } = await axios.patch(`/submissions/${id}`, body);
    setState((prev) => ({ ...prev, student: updateStudent(prev.student, submission) }));
    return submission;
  };



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
    closePopup,
    send_sms,

    // api requsts
    postAssignment,
    putAssignment,
    deleteAssignment,
    patchSubmission,
  };
};
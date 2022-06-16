import axios from "axios";
import { useState, useEffect } from "react";
import { findAssigned } from 'helpers/selectors';
import { parseISO } from 'date-fns';

export function useAppData() {
  const [state, setState] = useState({
    admin: false,
    teacherId: 1,
    studentId: 1,
    student: {},
    assignments: [],
    focused: null,
    day: null,
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


  const foundAssignments = findAssigned(state.assignments, !state.admin && state.student);

  const filterList = (assignment) => {
    if (state.view === 'pastDue') return !assignment.assigned.dateCompleted && parseISO(assignment.assigned.dueDate) < new Date();
    if (state.view === 'complete') return assignment.assigned.dateCompleted;
    if (state.view === 'art') return assignment.subject.name === 'Art';
    if (state.view === 'english') return assignment.subject.name === 'English';
    if (state.view === 'history') return assignment.subject.name === 'History';
    if (state.view === 'math') return assignment.subject.name === 'Math';
    if (state.view === 'science') return assignment.subject.name === 'Science';
  }



  const assignmentList = state.view ? foundAssignments.filter(filterList) : foundAssignments;

  const focusedAssignment = state.focused === -1 ? { teacherId: state.teacherId, day: state.day } : assignmentList.find((assignment) => assignment.id === state.focused);

  const setFocused = (id) => { setState((prev) => ({ ...prev, focused: id, })); };
  const setAdmin = () => { setState((prev) => ({ ...prev, admin: !prev.admin, })); };

  const createForm = (day) => {
    setState((prev) => ({...prev, day}))
    setFocused(-1);
  };

  const togglePopup = () => {
    setState((prev) => ({ ...prev, isPopupOpen: !prev.isPopupOpen}));
  }

  const updateStudentState = (res) => {
    setState((prev) => {
      const submissions = state.student.submissions.map((submission) => submission.id === res.data.id ? { ...res.data } : { ...submission });
      const student = { ...prev.student, submissions };
      return { ...prev, student, };
    });
  };

  const updateSubmission = (id, data) => {
    axios.patch(`/submissions/${id}`, data)
      .then(updateStudentState)
      .catch((e) => { console.error(e); });
  };

  const setView = (view) => {
  setState((prev) => ({ ...prev, view}));
  } 



  return { setFocused, setAdmin, updateSubmission, assignmentList, focusedAssignment, admin: state.admin, student:state.student, createForm, isPopupOpen: state.isPopupOpen, togglePopup, view: state.view, setView, };
};


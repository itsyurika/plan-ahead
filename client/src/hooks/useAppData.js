import axios from "axios";
import { useState, useEffect } from "react";
import { findAssigned } from 'helpers/selectors';

export function useAppData() {
  const [state, setState] = useState({
    admin: false,
    teacherId: 1,
    studentId: 1,
    student: {},
    assignments: [],
    focused: null,
    day: null,
    isPopupOpen: true
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


  const assignmentList = findAssigned(state.assignments, !state.admin && state.student);
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

  return { setFocused, setAdmin, updateSubmission, assignmentList, focusedAssignment, admin: state.admin, student:state.student, createForm, isPopupOpen: state.isPopupOpen, togglePopup};
};
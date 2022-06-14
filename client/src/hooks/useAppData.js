import axios from "axios";
import { useState, useEffect } from "react";
import { findAssigned } from 'helpers/selectors';

export function useAppData() {
  const [state, setState] = useState({
    isAdmin: false,
    teacherId: 1,
    studentId: 1,
    student: {},
    assignments: [],
    focused: null,
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

  const setFocused = (id) => { setState((prev) => ({ ...prev, focused: id, })); };
  const setAdmin = () => { setState((prev) => ({ ...prev, isAdmin: !prev.isAdmin, })); };


  const updateStudentState = (res) => {
    setState((prev) => {
      const student = {
        ...prev.student,
        submissions: state.student.submissions.map((submission) => (
          submission.id === res.data.id ? { ...res.data } : { ...submission }
        ))
      };
      return { ...prev, student, };
    });
  };

  const updateSubmission = (data) => {
    axios.patch(`/submissions/${focusedAssignment.assigned.id}`, data)
      .then(updateStudentState)
      .catch((e) => { console.error(e); });
  };

  const assignmentList = findAssigned(state.assignments, !state.adminMode && state.student);
  const focusedAssignment = assignmentList.find((item) => item.id === state.focused);

  return { setFocused, setAdmin, updateSubmission, assignmentList, focusedAssignment, isAdmin: state.isAdmin };
};
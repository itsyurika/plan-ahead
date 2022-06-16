import axios from "axios";
import { useState, useEffect } from "react";
import { findAssigned } from 'hooks/helpers';
import { parseISO, isBefore } from 'date-fns';

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
    if (state.view === 'pastDue') return !assignment.assigned.dateCompleted && isBefore(parseISO(assignment.assigned.dueDate), new Date());
    if (state.view === 'complete') return assignment.assigned.dateCompleted;
  };

  const assignmentList = state.view ? foundAssignments.filter(filterList) : foundAssignments;
  const focusedAssignment = state.focused === -1 ? { teacherId: state.teacherId, day: state.day } : assignmentList.find((assignment) => assignment.id === state.focused);

  const setFocused = (id) => { setState((prev) => ({ ...prev, focused: id, })); };
  const setAdmin = () => { setState((prev) => ({ ...prev, admin: !prev.admin, })); };
  const togglePopup = () => { setState((prev) => ({ ...prev, isPopupOpen: !prev.isPopupOpen })); };
  const setView = (view) => { setState((prev) => ({ ...prev, view })); };

  const showCreateForm = (day) => {
    setState((prev) => ({ ...prev, day }));
    setFocused(-1);
  };

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

  const { admin, student, isPopupOpen, view } = state;
  return { setFocused, setAdmin, updateSubmission,  showCreateForm, togglePopup, setView, assignmentList, focusedAssignment, admin, student, isPopupOpen, view };
};


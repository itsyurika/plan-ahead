import { useState, useEffect } from "react";
import { findAssigned, getTablePositions } from './helpers/selectors';
import { useStatusChange } from './hooks/useStatusChange'
import axios from "axios";
import './styles/App.scss';
import 'normalize.css';

import Sidenav from "components/Sidenav";
import Calendar from "components/Calendar";
import Assignment from "components/Assignment";
import AssignmentForm from "components/Assignment/Form";

const App = () => {

  const {
    state,
    startAssignment,
    handleStart,
    completeAssignment
    setFocused,
  } = useStatusChange();

  // set cookie
  useEffect(() => {
    // set local storage to admin mode

  }, []);

  // = helpers =


  const assignmentList = findAssigned(state.assignments, !state.adminMode && state.student);
  const focusedAssignment = assignmentList.find((item) => item.id === state.studentfocused);

  // = render main page =
  return (
    <main className="app">
      <Sidenav onLogin={() => { setAdminMode((prev) => !prev); }} admin={state.adminMode} />
      {state.focused
        && <Assignment
          {...focusedAssignment}
          onStart={handleStart}
          onComplete={() => completeAssignment(state.focused, state.studentId)}
          onBack={() => setFocused(null)}
          setAdmin={() => setAdminMode(true)}
          adminMode = {state.adminMode}
        />}
      <Calendar assignments={assignmentList} onFocus={(id) => setFocused(id)} />

      {state.adminMode && <AssignmentForm teacherId={state.teacherId} />}
    </main>
  );
};

export default App;
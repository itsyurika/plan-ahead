import './styles/App.scss';
import 'normalize.css';
import { useAppData } from './hooks/useAppData';
import { useState } from 'react';

import Sidenav from "components/Sidenav";
import Calendar from "components/Calendar";
import Assignment from "components/Assignment";

const App = () => {
  const {
    focusedAssignment,
    assignmentList,
    setFocused,
    setAdmin,
    admin,
    updateSubmission,
    createForm
  } = useAppData();

  return (
    <main className="app">
      <Sidenav onLogin={setAdmin} admin={admin} />
      {focusedAssignment &&
        <Assignment
          {...focusedAssignment}
          onStart={() => { updateSubmission(focusedAssignment.assigned.id, { dateStarted: new Date() }); }}
          onComplete={() => { updateSubmission(focusedAssignment.assigned.id, { dateCompleted: new Date() }); }}
          onCancelStarted={() => { updateSubmission(focusedAssignment.assigned.id, { dateStarted: null }); }}
          onCancelComplete={() => { updateSubmission(focusedAssignment.assigned.id, { dateCompleted: null }); }}
          onBack={() => setFocused(null)}
          admin={admin}
        />}
      <Calendar
        admin={admin}
        assignments={assignmentList}
        onAdd={createForm}
        onFocus={(id) => setFocused(id)} />
    </main>
  );
};

export default App;
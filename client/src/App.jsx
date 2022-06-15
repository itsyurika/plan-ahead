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
  } = useAppData();

  const [createDay, setCreateDay] = useState("")

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
          day = {createDay}
        />}
      <Calendar assignments={assignmentList} onAdd={(day) => { setFocused(-1); setCreateDay(day); }} onFocus={(id) => setFocused(id)} />
    </main>
  );
};

export default App;
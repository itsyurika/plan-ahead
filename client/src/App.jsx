import './styles/App.scss';
import 'normalize.css';
import { useAppData } from './hooks/useAppData';

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


  return (
    <main className="app">
      <Sidenav onLogin={setAdmin} admin={admin} />
      {focusedAssignment &&
        <Assignment
          {...focusedAssignment}
          onStart={() => { updateSubmission(focusedAssignment.assigned.id, { dateStarted: new Date() }); }}
          onComplete={() => { updateSubmission(focusedAssignment.assigned.id, { dateCompleted: new Date() }); }}
          onBack={() => setFocused(null)}
          admin={admin}
        />}
      <Calendar assignments={assignmentList} onAdd={(day) => { console.log('clicked add', day); }} onFocus={(id) => setFocused(id)} />
    </main>
  );
};

export default App;
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
    isAdmin,
    updateSubmission,
  } = useAppData();

  // = render main page =
  return (
    <main className="app">
      <Sidenav onLogin={setAdmin} isAdmin={isAdmin} />
      {focusedAssignment
        && <Assignment
          {...focusedAssignment}
          onStart={() => { updateSubmission({ dateStarted: new Date() }); }}
          onComplete={() => { updateSubmission({ dateCompleted: new Date() }); }}
          onBack={() => setFocused(null)}
          setAdmin={setAdmin}
          isAdmin={isAdmin}
        />}
      <Calendar assignments={assignmentList} onAdd={(day) => { console.log('clicked add', day); }} onFocus={(id) => setFocused(id)} />
    </main>
  );
};

export default App;
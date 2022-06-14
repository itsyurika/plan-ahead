import { findAssigned} from './helpers/selectors';
import { useStatusChange } from './hooks/useStatusChange';
import './styles/App.scss';
import 'normalize.css';

import Sidenav from "components/Sidenav";
import Calendar from "components/Calendar";
import Assignment from "components/Assignment";
import AssignmentForm from "components/Assignment/Form";

const App = () => {

  const {
    state,
    setFocused,
    setAdminMode,
    startAssignment,
    completeAssignment,
  } = useStatusChange();
  
  const {
    focused,
    adminMode,
    studentId,
    teacherId
  } = state

  const assignmentList = findAssigned(state.assignments, !state.adminMode && state.student);
  const focusedAssignment = assignmentList.find((item) => item.id === state.focused);


  // = render main page =
  return (
    <main className="app">
      <Sidenav onLogin={() => { setAdminMode(adminMode) }} admin={adminMode} />
      {focused
        && <Assignment
          {...focusedAssignment}
          onStart={() => { startAssignment(focused, studentId); }}
          onComplete={() => { completeAssignment(focused, studentId); }}
          onBack={() => setFocused(null)}
          setAdmin={() => setAdminMode(true)}
          adminMode={adminMode}
        />}
      <Calendar assignments={assignmentList} onAdd={() => { console.log('clicked add'); }} onFocus={(id) => setFocused(id)} />

      {adminMode && <AssignmentForm teacherId={teacherId} />}
    </main>
  );
};

export default App;
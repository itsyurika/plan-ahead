import './styles/App.scss';
import 'normalize.css';
import { useAppData } from './hooks/useAppData';

import Navbar from 'components/Navbar';
import SideNav from "components/Sidenav";
import Calendar from "components/Calendar";
import Assignment from "components/Assignment";

const App = () => {
  const {
    focusedAssignment,
    assignmentList,
    setFocused,
    setAdmin,
    admin,
    student,
    updateSubmission,
  } = useAppData();


  return (
    <div id="outer-container">
      <SideNav pageWrapId={"app"} outerContainerId={"outer-container"}/>

    <main className="app">
      <Navbar onLogin={setAdmin} admin={admin} student={student}/>
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
      <Calendar assignments={assignmentList} onAdd={(day) => { setFocused(-1); console.log('clicked add', day); }} onFocus={(id) => setFocused(id)} />
    </main>
        </div>
  );
};

export default App;
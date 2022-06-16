import './styles/App.scss';
import 'normalize.css';
import { useAppData } from './hooks/useAppData';

import Navbar from 'components/Navbar';
import SideNav from "components/Sidenav";
import Calendar from "components/Calendar";
import Assignment from "components/Assignment";
import Popup from 'components/Popup';


const App = () => {
  const {
    focusedAssignment,
    assignmentList,
    setFocused,
    setAdmin,
    admin,
    student,
    updateSubmission,
    createForm,
    isPopupOpen,
    togglePopup
  } = useAppData();

  return (
    <div id="outer-container">
      <SideNav pageWrapId={"app"} outerContainerId={"outer-container"} />

      <main className="app">
        <Popup isPopupOpen={isPopupOpen} onClose={() => togglePopup()} showPastDue={() => console.log("clicked me!")}/>
        <Navbar onLogin={setAdmin} admin={admin} student={student} />
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
    </div>
  );
};

export default App;
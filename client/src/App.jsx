import './styles/App.scss';
import 'normalize.css';
import { useAppData } from './hooks/useAppData';

import Navbar from 'components/Header';
import SideNav from "components/Sidenav";
import Calendar from "components/Calendar";
import Modal from "components/Modal";
import Popup from 'components/Popup';
import List from 'components/List';


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
    togglePopup,
    view,
    setView,
  } = useAppData();


  return (
    <div id="outer-container">
      <SideNav pageWrapId={"app"} outerContainerId={"outer-container"} showComplete={() => setView('complete')} showCalendar={() => setView(null)} showPastDue={() => setView('pastDue')} />

      <main className="app">
        <Popup isPopupOpen={isPopupOpen} onClose={() => togglePopup()} showPastDue={() => console.log("clicked me!")} />
        <Navbar onLogin={setAdmin} admin={admin} student={student} />
        {focusedAssignment &&
          <Modal
            {...focusedAssignment}
            onStart={() => { updateSubmission(focusedAssignment.assigned.id, { dateStarted: new Date() }); }}
            onComplete={() => { updateSubmission(focusedAssignment.assigned.id, { dateCompleted: new Date() }); }}
            onCancelStarted={() => { updateSubmission(focusedAssignment.assigned.id, { dateStarted: null }); }}
            onCancelComplete={() => { updateSubmission(focusedAssignment.assigned.id, { dateCompleted: null }); }}
            onBack={() => setFocused(null)}
            admin={admin}
          />}
        {!view && <Calendar
          admin={admin}
          assignments={assignmentList}
          onAdd={createForm}
          onFocus={(id) => setFocused(id)} />}
        {view && <List
          student={student}
          assignmentList={assignmentList}
          admin={admin}
          onStart={() => { updateSubmission(focusedAssignment.assigned.id, { dateStarted: new Date() }); }}
          onComplete={() => { updateSubmission(focusedAssignment.assigned.id, { dateCompleted: new Date() }); }}
          onCancelStarted={() => { updateSubmission(focusedAssignment.assigned.id, { dateStarted: null }); }}
          onCancelComplete={() => { updateSubmission(focusedAssignment.assigned.id, { dateCompleted: null }); }}
          onBack={() => setFocused(null)}
          view={view}
        />}


      </main>
    </div>
  );
};

export default App;
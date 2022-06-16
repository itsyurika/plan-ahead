import './styles/App.scss';
import 'normalize.css';
import { useAppData } from './hooks/useAppData';

import Navbar from 'components/Navbar';
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
    complete,
    updateComplete,
    list,
    calendarView
  } = useAppData();

  console.log("complete state",complete)
  console.log("list state", list)

  return (
    <div id="outer-container">
      <SideNav pageWrapId={"app"} outerContainerId={"outer-container"} complete={complete} updateComplete={() => updateComplete()} list={list} calendarView={() => calendarView()} />

      <main className="app">
        <Popup isPopupOpen={isPopupOpen} onClose={() => togglePopup()} />
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
        {!list && <Calendar
          admin={admin}
          assignments={assignmentList}
          onAdd={createForm}
          onFocus={(id) => setFocused(id)} />}
        {list && complete && <List
          student={student} 
          assignmentList={assignmentList}            
          admin={admin}
          onStart={() => { updateSubmission(focusedAssignment.assigned.id, { dateStarted: new Date() }); }}
          onComplete={() => { updateSubmission(focusedAssignment.assigned.id, { dateCompleted: new Date() }); }}
          onCancelStarted={() => { updateSubmission(focusedAssignment.assigned.id, { dateStarted: null }); }}
          onCancelComplete={() => { updateSubmission(focusedAssignment.assigned.id, { dateCompleted: null }); }}
          onBack={() => setFocused(null)}/>}
          
      </main>
    </div>
  );
};

export default App;
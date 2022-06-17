import './styles/App.scss';
import 'normalize.css';
import { useAppData } from './hooks/useAppData';

import Navbar from 'components/Header';
import SideNav from "components/Sidenav";
import Calendar from "components/Calendar";
import Modal from "components/Modal";
import Popup from 'components/Popup';
import List from 'components/List';
import Table from 'components/Table';


const App = () => {

  const {
    admin,
    student,
    students,
    view,
    assignmentList,
    focusedAssignment,
    isPopupOpen,
    setFocused,
    setStudent,
    setAdmin,
    postAssignment,
    putAssignment,
    deleteAssignment,
    patchSubmission,
    showCreateForm,
    togglePopup,
    closePopup,
    setView,
  } = useAppData();

  return (
    <div id="outer-container">
      <SideNav
      pageWrapId={"app"}
      outerContainerId={"outer-container"}
      showCalendar={() => setView(null)}
      showComplete={() => setView('complete')}
      showPastDue={() => setView('pastDue')}
      showArt={() => setView('art')}
      showEnglish={() => setView('english')}
      showHistory={() => setView('history')}
      showMath={() => setView('math')}
      showScience={() => setView('science')}
      showAll={() => setView('all')}
      showStudents={() => setView('students')}
      admin={admin}
      />

      <main className="app">
        <Popup isPopupOpen={isPopupOpen} onClose={() => togglePopup()} showPastDue={() => setView('pastDue')}/>
        <Navbar onLogin={setAdmin} admin={admin} student={student} />

        {focusedAssignment && <Modal {...focusedAssignment}
          admin={admin}
          onNew={postAssignment}
          onEdit={putAssignment}
          onDelete={deleteAssignment}
          onStart={() => { patchSubmission(focusedAssignment.assigned.id, { dateStarted: new Date() }); }}
          onComplete={() => { patchSubmission(focusedAssignment.assigned.id, { dateCompleted: new Date() }); }}
          onCancelStarted={() => { patchSubmission(focusedAssignment.assigned.id, { dateStarted: null }); }}
          onCancelComplete={() => { patchSubmission(focusedAssignment.assigned.id, { dateCompleted: null }); }}
          onBack={() => setFocused(null)}
        />}

        {!view && <Calendar
          admin={admin}
          assignments={assignmentList}
          onAdd={showCreateForm}
          onFocus={(id) => setFocused(id)} 
          closePopup={() => closePopup()}
          />}
        {view && view !== 'students' && <List
          student={student}
          assignmentList={assignmentList}
          admin={admin}
          updateStatus={patchSubmission}
          onBack={() => setFocused(null)}
          view={view}
          closePopup={() => closePopup()}
        />}
        {view === 'students' && <Table
          assignmentList={assignmentList}
          students={students}
          student={student}
          setAdmin={setAdmin}
          admin={admin}
          updateStatus={patchSubmission}
          onBack={() => setFocused(null)}
          view={view}
          closePopup={() => closePopup()}
          setStudent={(id) => setStudent(id)}
        />}
      </main>
    </div>
  );
};

export default App;
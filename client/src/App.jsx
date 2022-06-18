import './styles/App.scss';
import 'normalize.css';
import party from 'party-js';
import { useAppData } from './hooks/useAppData';

import Header from 'components/Header';
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
    send_sms,
  } = useAppData();

  return (
    <div id='outer-container'>
      <SideNav
        pageWrapId={'app'}
        outerContainerId={'outer-container'}
        selectView={(name) => { setView(name); }}
        admin={admin}
      />

      <main className='app'>
        {!admin && <Popup 
        isPopupOpen={isPopupOpen} 
        onClose={() => togglePopup()} 
        assignmentList={assignmentList}
        student={student}
        onRemind={() => send_sms()} 
        />}

        <Header onLogin={setAdmin} admin={admin} student={student} setHome={() => { setView(view ? null : 'pastDue'); }} />

        {focusedAssignment && <Modal {...focusedAssignment}
          admin={admin}
          onNew={postAssignment}
          onEdit={putAssignment}
          onDelete={deleteAssignment}
          onStart={(e) => { 
            patchSubmission(focusedAssignment.assigned.id, { dateStarted: new Date() });
            party.confetti(e.target);
          }}
          onComplete={(e) => { patchSubmission(focusedAssignment.assigned.id, { dateCompleted: new Date() }); 
          party.sparkles(e.target)}}
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
          closePopup={() => closePopup}
          setStudent={(id) => setStudent(id)}
          onRemind={() => send_sms()}
        />}
      </main>
    </div>
  );
};

export default App;
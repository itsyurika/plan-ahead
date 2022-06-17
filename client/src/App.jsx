import './styles/App.scss';
import 'normalize.css';
import { useAppData } from './hooks/useAppData';

import Header from 'components/Header';
import SideNav from "components/Sidenav";
import Calendar from "components/Calendar";
import Modal from "components/Modal";
import Popup from 'components/Popup';
import List from 'components/List';


const App = () => {
  const {
    admin,
    student,
    view,
    assignmentList,
    focusedAssignment,
    isPopupOpen,
    setFocused,
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
    <div id='outer-container'>
      <SideNav
        pageWrapId={'app'}
        outerContainerId={'outer-container'}
        selectView={(name) => { setView(name); }}
        admin={admin}
      />

      <main className='app'>
        <Popup isPopupOpen={isPopupOpen} onClose={() => togglePopup()} showPastDue={() => setView('pastDue')} />
        <Header onLogin={setAdmin} admin={admin} student={student} setHome={() => { setView(view ? null : 'pastDue'); }} />

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
        {view && <List
          student={student}
          assignmentList={assignmentList}
          admin={admin}
          updateStatus={patchSubmission}
          onBack={() => setFocused(null)}
          view={view}
          closePopup={() => closePopup()}
        />}
      </main>
    </div>
  );
};

export default App;
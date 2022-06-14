import { useState, useEffect } from "react";
import { buildStudentCards, getTablePositions } from './helpers/selectors';
import axios from "axios";
import './styles/App.scss';
import 'normalize.css';

import Sidenav from "components/Sidenav";
import Calendar from "components/Calendar";
import Assignment from "components/Assignment";
import AssignmentForm from "components/Assignment/Form";

const App = () => {
  // = state & effects =
  const [adminMode, setAdminMode] = useState(false);
  const [teacherId, setTeacherId] = useState(1); // check cookies
  const [studentId, setStudentId] = useState(1); // check cookies
  const [student, setStudent] = useState({});
  const [assignments, setAssignments] = useState([]);
  const [focused, setFocused] = useState(null);

  useEffect(() => {
    Promise.all([
      axios.get(`/teachers/${teacherId}/assignments`),
      axios.get('/students/' + studentId),
    ])
      .then((res) => {
        setAssignments(res[0].data);
        setStudent(res[1].data);
      });
  }, []);

  // set cookie
  useEffect(() => {
    // set local storage to admin mode

  }, [adminMode]);

  // = helpers =
  const startAssignment = () => {
    axios.patch('/assignments/' + focused, { dateStarted: new Date(), studentId: studentId });
  };
  const completeAssignment = () => {
    axios.patch('/assignments/' + focused, { dateCompleted: new Date(), studentId: studentId });
  };

  const assignmentList = adminMode ? assignments : buildStudentCards(assignments, student);
  const focusedAssignment = assignmentList.find((item) => item.id === focused);

  // = render main page =
  return (
    <main className="app">
      <Sidenav onLogin={() => { setAdminMode((prev) => !prev); }} admin={adminMode} />
      {focused
        ? <Assignment
          {...focusedAssignment}
          onStart={startAssignment}
          onComplete={completeAssignment}
          onBack={() => setFocused(null)}
        />
        : <Calendar assignments={assignmentList} onFocus={(id) => setFocused(id)} />}

      {adminMode && <AssignmentForm teacherId={teacherId} />}
    </main>
  );
};

export default App;
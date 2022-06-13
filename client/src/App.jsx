import { useState, useEffect } from "react";
import { buildStudentCards, getTablePositions } from './helpers/selectors';
import axios from "axios";
import './styles/App.scss';
import 'normalize.css';

import Calendar from "components/Calendar";
import Assignment from "components/Assignment";
import AssignmentForm from "components/Assignment/Form";

const App = () => {
  // = state & effects =
  const [teacherId, setTeacherId] = useState(1); // check cookies
  const [studentId, setStudentId] = useState(2); // check cookies
  const [student, setStudent] = useState({});
  const [assignments, setAssignments] = useState([]);
  const [focused, setFocused] = useState(null);

  useEffect(() => {
    Promise.all([
      axios.get(`/teachers/${teacherId || 1}/assignments`),
      axios.get('/students/' + studentId),
    ])
      .then((res) => {
        setAssignments(res[0].data);
        setStudent(res[1].data);
      });
  }, []);


  // = helpers =
  const startAssignment = () => {
    axios.patch('/assignments/' + focused, { dateStarted: new Date(), studentId: studentId });
  };
  const completeAssignment = () => {
    axios.patch('/assignments/' + focused, { dateCompleted: new Date(), studentId: studentId });
  };

  const assignmentList = teacherId ? assignments : buildStudentCards(assignments, student);
  const updatedList = getTablePositions(assignmentList);
  const focusedAssignment = updatedList.find((item) => item.id === focused);

  // = render main page =
  return (
    <main className="App">
      {focused
        ? <Assignment
          {...focusedAssignment}
          onStart={startAssignment}
          onComplete={completeAssignment}
          onBack={() => setFocused(null)}
        />
        : <Calendar assignments={updatedList} onFocus={(id) => setFocused(id)} />}

        {teacherId && <AssignmentForm teachId={teacherId}/>}
        heelo
    </main>
  );
};

export default App;
import { useState, useEffect } from "react";
import { buildTeacherCards, buildStudentCards, getTablePosition } from './helpers/selectors';
import axios from "axios";
import './styles/App.scss';
import 'normalize.css';


import Calendar from "components/Calendar";
import AssignmentView from "components/AssignmentView";

const App = () => {
  // = state =
  const [teacher, setTeacher] = useState(null);
  const [studentId, setStudentId] = useState(1);
  const [student, setStudent] = useState({});
  const [assignments, setAssignments] = useState([]);
  const [focused, setFocused] = useState(null);

  useEffect(() => {
    Promise.all([
      axios.get('/assignments'),
      axios.get('/students/' + studentId),
    ])
      .then((res) => {
        setAssignments(res[0].data);
        setStudent(res[1].data);
      });
  }, []);


  // = helpers =
  const startAssignment = (id) => {
    axios.patch('/assignments/' + focused, { dateStarted: new Date(), studentId: studentId });
  };
  const completeAssignment = (id) => {
    axios.patch('/assignments/' + focused, { dateCompleted: new Date(), studentId: studentId });
  };

  // const teacherAssignments = buildTeacherCards(assignments, studentId);
  const studentAssignments = buildStudentCards(assignments, student);
  const assignmentCards = getTablePosition(studentAssignments);
  const focusedAssignment = assignmentCards.find((item) => item.id === focused);

  // = render main page =
  return (
    <main className="App">
      {focused
        ? <AssignmentView
          {...focusedAssignment}
          onStart={startAssignment}
          onComplete={() => { completeAssignment(focused); }}
          onBack={() => setFocused(null)}
        />
        : <Calendar assignments={assignmentCards} onFocus={(id) => setFocused(id)} />}
    </main>
  );
};

export default App;
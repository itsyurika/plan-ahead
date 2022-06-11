import { useState, useEffect } from "react";
import { buildStudentCards, getTablePositions } from './helpers/selectors';
import axios from "axios";
import './styles/App.scss';
import 'normalize.css';


import Calendar from "components/Calendar";
import AssignmentShow from "components/AssignmentShow";

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
  const startAssignment = () => {
    axios.patch('/assignments/' + focused, { dateStarted: new Date(), studentId: studentId });
  };
  const completeAssignment = () => {
    axios.patch('/assignments/' + focused, { dateCompleted: new Date(), studentId: studentId });
  };

  // const teacherAssignments = buildTeacherCards(assignments, studentId);
  const assignmentList = teacher ? assignments : buildStudentCards(assignments, student);
  const updatedList = getTablePositions(assignmentList);
  const focusedAssignment = updatedList.find((item) => item.id === focused);

  // = render main page =
  return (
    <main className="App">
      {focused
        ? <AssignmentShow
          {...focusedAssignment}
          onStart={startAssignment}
          onComplete={completeAssignment}
          onBack={() => setFocused(null)}
        />
        : <Calendar assignments={updatedList} onFocus={(id) => setFocused(id)} />}
    </main>
  );
};

export default App;
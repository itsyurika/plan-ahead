import { useState, useEffect } from "react";
import { buildCards } from './helpers/selectors';
import axios from "axios";
import './styles/App.scss';
import 'normalize.css';


import Calendar from "components/Calendar";
import AssignmentView from "components/AssignmentView";

const App = () => {
  // = state =
  const [teacher, setTeacher] = useState(null);
  const [student, setStudent] = useState(1);
  const [assignments, setAssignments] = useState([]);
  const [focused, setFocused] = useState(null);

  useEffect(() => {
    axios.get('/assignments')
      .then((res) => {
        setAssignments(res.data);
      });
  }, []);


  // = helpers =
  const startAssignment = (id) => {
    axios.patch('/assignments/' + focused, { dateStarted: new Date(), studentId: student });
  };
  const completeAssignment = (id) => {
    axios.patch('/assignments/' + focused, { dateCompleted: new Date(), studentId: student });
  };

  const studentAssignments = buildCards(assignments, student);
  const focusedAssignment = studentAssignments.find((item) => item.id === focused);

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
        : <Calendar assignments={studentAssignments} onFocus={(id) => setFocused(id)} />}
    </main>
  );
};

export default App;
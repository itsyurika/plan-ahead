import { useState, useEffect } from "react";
import { buildCards } from './helpers/selectors';
import axios from "axios";
import './styles/App.scss';
import 'normalize.css';


import Calendar from "components/Calendar";
import Slot from "components/Slot";
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
  const startAssignment = () => {
    axios.put('/assignments')
  };
  const completeAssignment = () => {

  };

  const studentAssignments = buildCards(assignments, student);
  const assignmentsList = focused
    ? studentAssignments.find((item) => item.id === focused)
    : studentAssignments.map((item) => <Slot key={item.id} {...item} onClick={() => setFocused(item.id)} />);


  // = render main page =
  return (
    <main className="App">
      {focused
        ? <AssignmentView
          {...assignmentsList}
          onStart={startAssignment}
          onComplete={completeAssignment}
          onBack={() => setFocused(null)}
        />
        : <Calendar assignments={studentAssignments} onClick={() => setFocused(student)} />}
    </main>
  );
};

export default App;
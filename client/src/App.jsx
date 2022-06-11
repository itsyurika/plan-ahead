import { useState, useEffect } from "react";
import { assignmentsSelector } from './helpers/selectors';
import axios from "axios";
import './styles/App.scss';
import 'normalize.css';


import Calendar from "components/Calendar";
import Assignment from "components/Assignment";
import AssignmentView from "components/AssignmentView";

const App = () => {
  // = state =
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
  const studentAssignments = assignmentsSelector(assignments, student);
  const assignmentsList = focused
    ? studentAssignments.find((item) => item.id === focused)
    : studentAssignments.map((item) => <Assignment key={item.id} {...item} onClick={() => setFocused(item.id)} />);


  // = render main page =
  return (
    <main className="App">
      {focused
        ? <AssignmentView {...assignmentsList} onClick={() => setFocused(null)} />
        : <Calendar>{assignmentsList}</Calendar>}
    </main>
  );
};

export default App;
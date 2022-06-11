import { useState, useEffect } from "react";
import { assignmentsSelector } from './helpers/selectors';
import axios from "axios";
import classnames from 'classnames';
import './styles/App.scss';
import 'normalize.css';


import Assignment from "components/Assignment";
import Calendar from "components/Calendar";

const App = () => {
  // = state =
  const [teacher, setTeacher] = useState(0);
  const [student, setStudent] = useState(1);
  const [assignments, setAssignments] = useState([]);
  const [assignment, setAssignment] = useState(0);

  useEffect(() => {
    axios.get('/assignments')
      .then((res) => {
        setAssignments(res.data);
      });
  }, []);

  // = helpers =
  const studentAssignments = assignmentsSelector(assignments, student);
  const assignmentsList = studentAssignments.map((item) => <Assignment key={item.id} {...item} onClick={(id) => setAssignment(id)} />);

  // = render main page =
  return (
    <main className="App">
      {(assignment && <AssignmentView />) || <Calendar>{assignmentsList}</Calendar>}
    </main>
  );
};

export default App;
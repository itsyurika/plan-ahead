import { useState, useEffect } from "react";
import { assignmentsSelector } from './helpers/selectors';
import axios from "axios";
import './styles/App.scss';
import 'normalize.css';


import Calendar from "components/Calendar";
import TimeSlot from "components/TimeSlot";
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

  // = states from react calendar = //
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);

  const showDetailsHandle = (dayStr) => {
    setData(dayStr);
    setShowDetails(true);
  };
  // =end of react calendar= 


  // = helpers =
  const studentAssignments = assignmentsSelector(assignments, student);
  const assignmentsList = focused
    ? studentAssignments.find((item) => item.id === focused)
    : studentAssignments.map((item) => <TimeSlot key={item.id} {...item} onClick={() => setFocused(item.id)} />);


  // = render main page =
  return (
    <main className="App">
      {focused
        ? <AssignmentView {...assignmentsList} onClick={() => setFocused(null)} />
        : <Calendar timeSlot={studentAssignments[0]} onClick={() => setFocused(student)}>{assignmentsList}</Calendar>}
      <div>
        <h1>Week View Calendar with react</h1>
        <br />
        <h2>Example</h2>
        <CalendarReact showDetailsHandle={showDetailsHandle} />
        <br />
        {showDetails && <Details data={data} />}
      </div>
    </main>
  );
};

export default App;
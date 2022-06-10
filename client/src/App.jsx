import { useState, useEffect } from "react";
import axios from "axios";
import Assignment from "components/Assignment";
import './styles/App.scss';
import 'normalize.css';



// = main component =
function App() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    axios.get('/assignments')
      .then((res) => {
        setAssignments(res.data);
      });
    // axios.post('/assignments');

  }, []);

  const assignmentsList = assignments.map((item) => <Assignment key={item.id} {...item} />)



  return (
    <div className="App">
      {assignmentsList}
    </div>
  );
}

export default App;
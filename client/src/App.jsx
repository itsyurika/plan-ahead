import { useState, useEffect } from "react";
import axios from "axios";

import Assignment from "components/Assignment";

import './styles/App.css';
import 'normalize.css';

function App() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    axios.get('/assignments')
      .then((res) => {
        console.log('heere', res);
        setAssignments(res.data);
      });
    // axios.post('/assignments');

  }, []);


  return (
    <div className="App">
      "Hello World :D"
      <Assignment />
    </div>
  );
}

export default App;
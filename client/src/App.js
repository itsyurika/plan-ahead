import { useState, useEffect } from "react";
import axios from "axios";

import './styles/App.css';
import 'normalize.css';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('/students')
      .then((res) => {
        console.log('heere', res);
        setStudents(res.data);
      });
  }, []);


  return (
    <div className="App">
      "Hello World :D"
      {students[0]?.first_name}
    </div>
  );
}

export default App;

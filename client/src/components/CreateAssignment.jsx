import { useState } from 'react';
import axios from 'axios';


const CreateAssignment = (props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [teacher_id, setTeacher] = useState(1);
  const [subject_id, setSubject] = useState(1);

  // = helpers =
  const confirm = () => {
    const data = { name, description, url, teacher_id, subject_id };
    axios.post('/assignments', data);
  };

  return (
    <section>
      <h3>Create Assignment</h3>
      <form onSubmit={(e) => e.preventDefault()} >
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={description} onChange={(e) => setDescription(e.target.value)} />
        <input value={url} onChange={(e) => setUrl(e.target.value)} />
        <input value={teacher_id} onChange={(e) => setTeacher(+e.target.value)} />
        <input value={subject_id} onChange={(e) => setSubject(+e.target.value)} />
      </form>
      <button onClick={confirm} type='Submit'>Create</button>
    </section>
  );
};

export default CreateAssignment;
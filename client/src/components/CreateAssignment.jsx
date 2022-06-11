import { useState } from 'react';
import axios from 'axios';


const CreateAssignment = (props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [teacherId, setTeacher] = useState(1);
  const [subjectId, setSubject] = useState(1);

  // = helpers =
  const confirm = () => {
    axios.post('/assignments', { name, description, url, teacherId, subjectId });
  };

  return (
    <section>
      <h3>Create Assignment</h3>
      <form onSubmit={(e) => e.preventDefault()} >
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={description} onChange={(e) => setDescription(e.target.value)} />
        <input value={url} onChange={(e) => setUrl(e.target.value)} />
        <input value={teacherId} onChange={(e) => setTeacher(+e.target.value)} />
        <input value={subjectId} onChange={(e) => setSubject(+e.target.value)} />
      </form>
      <button onClick={confirm} type='Submit'>Create</button>
    </section>
  );
};

export default CreateAssignment;
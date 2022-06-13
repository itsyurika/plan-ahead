import { useState } from 'react';
import axios from 'axios';

const CreateAssignment = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [teacherId, setTeacherId] = useState(1);
  const [subjectId, setSubjectId] = useState(1);

  // = helpers =
  const confirm = () => {
    const data = { title, description, url, teacherId, subjectId, defaultDueDate: new Date('Jun 07 2022 19:00:00') };
    axios.post('/assignments', data);
  };

  return (
    <section className='assignment__form'>
      <h3>Create Assignment</h3>
      <form onSubmit={(e) => e.preventDefault()} >
        <input value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)} />
        <input value={description} placeholder="description" onChange={(e) => setDescription(e.target.value)} />
        <input value={url} placeholder="google link" onChange={(e) => setUrl(e.target.value)} />
        <input value={teacherId} placeholder="teacherId" onChange={(e) => setTeacherId(+e.target.value)} />
        <input value={subjectId} placeholder="subjectId" onChange={(e) => setSubjectId(+e.target.value)} />
      </form>
      <button onClick={confirm} type='Submit'>Create</button>
    </section>
  );
};

export default CreateAssignment;
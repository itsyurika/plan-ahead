import { useState } from 'react';
import axios from 'axios';
import 'components/styles/Assignment.scss';

const CreateAssignment = (props) => {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [url, setUrl] = useState(props.url);
  const [teacherId, setTeacherId] = useState(1);
  const [subjectId, setSubjectId] = useState(1);
  const [isEdit, setIsEdit] = useState(true)



  // = helpers =
  const saveEdit = () => {
    const data = { title, description, url, subjectId };
    axios.put('/assignments/' + props.id, data);
    props.onBack()
    window.location.reload(true);
    //change to useEffect
  };

  const saveNew = () => {
    const data = { title, description, url, subjectId, teacherId, defaultDueDate: new Date('Jun 10 2022 12:00:00') };
    axios.post('/assignments/', data);
    props.onBack()
    window.location.reload(true); //change to useEffect
  };

  return (
    <section className='assignment__form'>
      {isEdit && <h3>Edit Assignment</h3>}
      {!isEdit && <h3>Create Assignment</h3>}
      <form onSubmit={(e) => e.preventDefault()} >
        <input spellCheck='true' size='30' value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <textarea id="edit-description" rows='8' spellCheck='true' value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
        <input type='url' size='30' value={url} placeholder="Google Classroom Link" onChange={(e) => setUrl(e.target.value)} />

        <select id="selectList" onChange={(e) => setSubjectId(+e.target.value)}>
          <option>Subjects</option>
          <option value='2'>History</option>
          <option value='1'>Math</option>
        </select>

      </form>

      {isEdit && <button onClick={saveEdit} type='Submit'>Save</button>}
      {!isEdit && <button onClick={saveNew} type='Submit'>Save</button>}
      <button onClick={() => {setIsEdit((prev) => !prev)}}>Toggle</button> // Just here to test functionality.

    </section>
  );
};

export default CreateAssignment;
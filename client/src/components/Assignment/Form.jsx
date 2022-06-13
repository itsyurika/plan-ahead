import './Form.scss';
import { useState } from 'react';
import axios from 'axios';


const CreateAssignment = (props) => {

  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [url, setUrl] = useState(props.url);
  //const [teacherId, setTeacherId] = useState(1);
  const [subjectId, setSubjectId] = useState(1);

  // = helpers =
  const confirm = () => {
    const data = { title, description, url, subjectId };
    axios.put('/assignments/' + props.id, data);
  };



  return (
    <section className='assignment__form'>
      <h3>Edit Assignment</h3>
      <form onSubmit={(e) => e.preventDefault()} >
        <input spellCheck='true' size='30' value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea id="edit-description" rows='8' spellCheck='true' value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type='url' size='30' value={url} onChange={(e) => setUrl(e.target.value)} />
        <input value={subjectId} placeholder='subjectId' onChange={(e) => setSubjectId(+e.target.value)} />
      </form>
      <button onClick={confirm} type='Submit'>Save</button>
    </section>
  );
};

export default CreateAssignment;
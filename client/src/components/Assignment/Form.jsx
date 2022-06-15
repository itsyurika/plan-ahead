import 'components/styles/Assignment.scss';
import { useState } from 'react';
import axios from 'axios';
import DeleteModal from "./DeleteModal";

const CreateAssignment = (props) => {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [url, setUrl] = useState(props.url);
  const [teacherId, setTeacherId] = useState(1);
  const [subjectId, setSubjectId] = useState();
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);


  // = helpers =
  const saveEdit = () => {
    const data = { title, description, url, subjectId };
    // axios.put('/assignments/' + props.id, data);
    props.onBack();
  };

  const saveNew = () => {
    const data = { title, description, url, subjectId, teacherId, defaultDueDate: new Date(props.day) };
    axios.post('/assignments/', data);
    props.onBack();
  };

  const validation = () => {
    if (!title) {
      setError("Please enter a title.");
      return;
    } else if (!description) {
      setError("Please enter a description.");
      return;
    } else if (!url) {
      setError("Please enter google classroom link.");
      return;
    } else if (!subjectId) {
      setError("Please select a subject.");
    } else {
      setError(false)
      return saveNew();
    }
  };
  
  

// == output ==
  return (
    <section className='assignment__form'>
      {<h3>{props.id ? 'Edit' : 'Create'} Assignment</h3>}
      <h5 id="error">{error}</h5>
      <form onSubmit={(e) => e.preventDefault()} >
        <input spellCheck='true' size='30' value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <textarea id="edit-description" rows='8' spellCheck='true' value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
        <input size='30' value={url} placeholder="Google Classroom Link" onChange={(e) => setUrl(e.target.value)} />

        <select id="selectList" onChange={(e) => setSubjectId(+e.target.value)}>
          <option>Subjects</option>
          <option value='1'>Art</option>
          <option value='2'>English</option>
          <option value='3'>History</option>
          <option value='4'>Math</option>
          <option value='5'>Science</option>
        </select>
        {<button onClick={props.id ? saveEdit : validation} type='Submit'>Save</button>}
        {props.id && <button onClick={() => {setShowModal(true)}}>Delete</button>}
      </form>

      {showModal && <DeleteModal closeModal={() => setShowModal(false)} id={props.id} title={props.title} onBack={props.onBack} admin={props.admin} />}


    </section>
  );
};

export default CreateAssignment;
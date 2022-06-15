import 'components/styles/Assignment.scss';
import { useState } from 'react';
import axios from 'axios';
import DeleteModal from "./DeleteModal";

const CreateAssignment = (props) => {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [url, setUrl] = useState(props.url);
  const [teacherId, setTeacherId] = useState(1);
  const [subjectId, setSubjectId] = useState(1);
  const [showModal, setShowModal] = useState(false);

  console.log("props", props);
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

  return (
    <section className='assignment__form'>
      {<h3>{props.id ? 'Edit' : 'Create'} Assignment</h3>}
      <form onSubmit={(e) => e.preventDefault()} >
        <input spellCheck='true' size='30' value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <textarea id="edit-description" rows='8' spellCheck='true' value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
        <input type='url' size='30' value={url} placeholder="Google Classroom Link" onChange={(e) => setUrl(e.target.value)} />

        <select id="selectList" onChange={(e) => setSubjectId(+e.target.value)}>
          <option>Subjects</option>
          <option value='1'>Art</option>
          <option value='2'>English</option>
          <option value='3'>History</option>
          <option value='4'>Math</option>
          <option value='5'>Science</option>
        </select>
        {<button onClick={props.id ? saveEdit : saveNew} type='Submit'>Save</button>}
        <button onClick={() => { setShowModal(true); }}>Delete</button>
      </form>

      {showModal && <DeleteModal closeModal={() => setShowModal(false)} id={props.id} title={props.title} onBack={props.onBack} admin={props.admin} />}


    </section>
  );
};

export default CreateAssignment;
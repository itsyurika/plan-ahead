import 'components/styles/Assignment.scss';
import { useState } from 'react';
import axios from 'axios';
import DeleteModal from './DeleteModal';
import { format, parseISO } from 'date-fns';

const CreateAssignment = (props) => {
  const [title, setTitle] = useState(props.title || '');
  const [description, setDescription] = useState(props.description || '');
  const [url, setUrl] = useState(props.url || '');
  const [subjectId, setSubjectId] = useState(props.subjectId || 0);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  // = helpers =
  const valid = () => {
    if (!title) return setError('Please enter a title.');
    if (!description) return setError('Please enter a description.');
    if (!url) return setError('Please enter google classroom link.');
    if (!subjectId) return setError('Please select a subject.');

    setError(null);
    return true;
  };

  const saveEdit = () => {
    if (!valid()) return;

    axios.put('/assignments/' + props.id, { title, description, url, subjectId })
      .then((res) => {
        // update state
      });
    props.onBack();
  };

  const saveNew = () => {
    if (!valid()) return;

    axios.post('/assignments', { title, description, url, subjectId, teacherId: props.teacherId, defaultDueDate: props.day })
      .then((res) => {
        axios.post('/submissions', { assignmentId: res.data.id, dueDate: res.data.defaultDueDate });
      })
      .then((res) => {
        // update state
      });
    props.onBack();
  };


  // == output ==
  return (
    <section className='assignment__form'>
      {<h3>{props.id ? 'Edit' : 'Create'} Assignment</h3>}
      <h5 id='error'>{error}</h5>

      <form onSubmit={(e) => e.preventDefault()} >
        <input spellCheck='true' size='30' placeholder='Title' value={title} onChange={(e) => { setTitle(e.target.value); }} />
        <textarea id='edit-description' rows='8' spellCheck='true' value={description} placeholder='Description' onChange={(e) => { setDescription(e.target.value); }} />
        <input size='30' placeholder='Google Classroom Link' value={url} onChange={(e) => { setUrl(e.target.value); }} />

        <p>Due: {format(props.day || parseISO(props.defaultDueDate), 'MMM dd yyyy')}</p>

        <select id='selectList' value={subjectId} onChange={(e) => setSubjectId(+e.target.value)}>
          <option>Subjects</option>
          <option value='1'>Art</option>
          <option value='2'>English</option>
          <option value='3'>History</option>
          <option value='4'>Math</option>
          <option value='5'>Science</option>
        </select>

        {<button onClick={props.id ? saveEdit : saveNew} type='Submit'>Save</button>}
        {props.id && <button onClick={() => { setShowModal(true); }}>Delete</button>}
      </form>

      {showModal && <DeleteModal closeModal={() => { setShowModal(false); }} id={props.id} title={props.title} onBack={props.onBack} admin={props.admin} />}


    </section>
  );
};

export default CreateAssignment;
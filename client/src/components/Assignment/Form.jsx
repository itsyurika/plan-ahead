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

    axios.put('/assignments/' + props.id, { title, description, url, subjectId });
    props.onBack();
    window.location.reload(true)
  };

  const saveNew = () => {
    if (!valid()) return;

    axios.post('/assignments', { title, description, url, subjectId, teacherId: props.teacherId, defaultDueDate: props.day })
      .then((res) => {
        axios.post('/submissions', { assignmentId: res.data.id, dueDate: res.data.defaultDueDate });
      });
    props.onBack();
    window.location.reload(true)
  };


  // == output ==
  return (

    <section className='assignment__form'>
      {<h2>{props.id ? 'Edit' : 'Create'} Assignment</h2>}
      <h5 id='error'>{error}</h5>

      <form onSubmit={(e) => e.preventDefault()} >
        <input id='edit-title' spellCheck='true' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea id='edit-description' rows='8' spellCheck='true' value={description} placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
        <input id='edit-url' placeholder='Google Classroom Link' type='url' value={url} onChange={(e) => setUrl(e.target.value)} />
        <div className="due-drop">
        <p className='due-date'>Due: {format(props.day || parseISO(props.defaultDueDate), 'MMM dd yyyy')}</p>
        <select id='selectList' value={subjectId} onChange={(e) => setSubjectId(+e.target.value)}>
          <option>Subjects</option>
          <option value='1'>Art</option>
          <option value='2'>English</option>
          <option value='3'>History</option>
          <option value='4'>Math</option>
          <option value='5'>Science</option>
        </select>
        </div>


      <div className='btn-center'>
        {<button class='start-btn' onClick={props.id ? saveEdit : saveNew} type='Submit'>Save</button>}
        {props.id && <button class='undo-btn' onClick={() => { setShowModal(true); }}>Delete</button>}
      </div>

      </form>

      {showModal && <DeleteModal closeModal={() => setShowModal(false)} id={props.id} title={props.title} onBack={props.onBack} admin={props.admin} />}


    </section>

  );
};

export default CreateAssignment;
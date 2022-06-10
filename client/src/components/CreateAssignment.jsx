import React, { useState } from "react";
import axios from 'axios';






export default (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [teacher_id, setTeacher] = useState(1);
  const [subject_id, setSubject] = useState(1);

  const confirm = () => {
    const data = {name, description, url, teacher_id, subject_id};
    console.log("confirmed!")
    axios.post('/assignments', data);
  
  }

  return (
    <section>
      <h3>Create Assignment</h3>
      <form onSubmit={(e) => e.preventDefault()} >
      <input name="name" value={name} onChange={(e) => setName(e.target.value)}/>
      <input name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
      <input name="url" value={url} onChange={(e) => setUrl(e.target.value)} />
      <input name="teacher_id" value={teacher_id} onChange={(e) => setTeacher(+e.target.value)}/>
      <input name="subject_id" value={subject_id} onChange={(e) => setSubject(+e.target.value)}/>
      <button onClick={confirm} type="Submit"> Create </button>
      </form>
    </section>
  )}
import { useState, useEffect } from "react";
import axios from "axios";


export function useStatusChange () {
  // const [adminMode, setAdminMode] = useState(false);
  // const [teacherId, setTeacherId] = useState(1); // check cookies
  // const [studentId, setStudentId] = useState(1); // check cookies
  // const [student, setStudent] = useState({});
  // const [assignments, setAssignments] = useState([]);
  // const [focused, setFocused] = useState(null);
  // const [assnStatus, setAssnStatus] = useState(null);

  const initialState = {
    adminMode: false,
    teacherId: 1,
    studentId: 1,
    student: {},
    assignments: [],
    focused: null,
    assnStatus: null,
  }

  const [state, setState] = useState(initialState);


  useEffect(() => {
    Promise.all([
      axios.get(`/teachers/${state.teacherId}/assignments`),
      axios.get('/students/' + state.studentId),
    ])
      .then((res) => {
        setState((prev) => ({...prev, 
          assignments: res[0].data,
          students: res[1].data
        }));
      }).catch((error) => {
        console.log("error occurred whilte fetching data: ", error);
      })
  }, []);


  const startAssignment = (focused, studentId) => {
    console.log("studentID : ", studentId);
    return axios.patch(`/students/${studentId}/assignments/${focused}`, { dateStarted: new Date() })
  };
  
   const completeAssignment = (focused, studentId) => {
    return axios.patch(`/students/${studentId}/assignments/${focused}`, { dateCompleted: new Date()})
  };


  const handleStart = () => {
    startAssignment(state.focused, state.studentId)
    .then((res) => {
      console.log("res from handleStart: ", res);
      setState((prev) => {
        console.log("logging prev: ", prev);
        const updatedAssignments = prev.map((item) => {
          if (item.id===state.focused) {
            return {...item, assigned: {...res.data}}
          } else {
            return {...item}
          } 
        })
        console.log("updatedAssignment: ", updatedAssignments);
        return {...prev, updatedAssignments}
    })
  })
  }
  

  return {state, setFocused, startAssignment, completeAssignment, handleStart}

}



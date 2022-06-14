import { useState } from "react";
import axios from "axios";


export function useStatusChange () {
  const [assnStatus, setAssnStatus] = useState(null);

  const startAssignment = (focused, studentId) => {
    console.log("studentID : ", studentId);
    return axios.patch(`/students/${studentId}/assignments/${focused}`, { dateStarted: new Date() })
    .then((response) => {
      setAssnStatus('Started')
    })
  };
  
   const completeAssignment = (focused, studentId) => {
    return axios.patch(`/students/${studentId}/assignments/${focused}`, { dateCompleted: new Date()})
    .then((response) => {
      setAssnStatus('Completed')
    })
  };

  return {assnStatus, startAssignment, completeAssignment}

}



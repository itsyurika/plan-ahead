import { useState } from "react";
import axios from "axios";


export function useStatusChange () {
  const [assnStatus, setAssnStatus] = useState(null);

  const startAssignment = (focused, studentId) => {
    return axios.patch('/assignments/' + focused, { dateStarted: new Date(), studentId: studentId })
    .then((response) => {
      setAssnStatus('Started')
    })
  };
  
   const completeAssignment = (focused, studentId) => {
    return axios.patch('/assignments/' + focused, { dateCompleted: new Date(), studentId: studentId })
    .then((response) => {
      setAssnStatus('Completed')
    })
  };

  return {assnStatus, startAssignment, completeAssignment}

}



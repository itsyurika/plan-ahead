import { useState, useEffect } from "react";
import axios from "axios";


export function useStatusChange () {

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
          student: res[1].data
        }));
      }).catch((error) => {
        console.log("error occurred whilte fetching data: ", error);
      })
  }, []);


  const setFocused = (id) => {
    setState((prev) => 
      ({...prev,
        focused: id
      })
    )
  }

  const setAdminMode = (prevValue) => {
    setState((prev) => ({...prev,
    adminMode: !prevValue
    }) )
  };

  const startAssignment = (id, studentId) => {
    axios.patch(`/students/${studentId}/assignments/${id}`, { dateStarted: new Date() })
      .then((res) => {
        const studentAssignments = state.student.submissions.map((item) => (
          item.assignmentId === id ? { ...res.data } : { ...item }
        ));
        setState((prev) => ({...prev,
          student: {...prev.student, submissions: studentAssignments}
        }))
      });
  };

  const completeAssignment = (id, studentId) => {
    axios.patch(`/students/${studentId}/assignments/${state.focused}`, { dateCompleted: new Date() })
      .then((res) => {
        const studentAssignments = state.student.submissions.map((item) => (
          item.assignmentId === id ? { ...res.data } : { ...item }
        ));
        setState((prev) => ({...prev,
          student: {...prev.student, submissions: studentAssignments}
        }))
      });
  };

  return {state, setFocused, setAdminMode, startAssignment, completeAssignment}

}



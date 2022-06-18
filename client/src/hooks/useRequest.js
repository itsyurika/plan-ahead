import axios from "axios";

const useRequest = () => {
  // update state
  const addAssignmentToState = (data) => {
    setState((prev) => {
      const assignments = [...state.assignments, { ...data }];
      return { ...prev, assignments, };
    });
    return data;
  };

  const updateAssignmentState = (data) => {
    setState((prev) => {
      const assignments = state.assignments.map((assignment) => assignment.id === data.id ? { ...data } : { ...assignment });
      return { ...prev, assignments, };
    });
    return data;
  };

  const removeAssignmentFromState = (data) => {
    setState((prev) => {
      const assignments = state.assignments.filter((assignment) => assignment.id !== data.id);
      return { ...prev, assignments, };
    });
    return data;
  };

  const addSubmissionToStudentsState = (data) => {
    const submission = data.find((submission) => submission.studentId === state.studentId);
    setState((prev) => {
      const submissions = [...state.student.submissions, { ...submission }];
      const student = { ...prev.student, submissions };
      const students = state.students.map((student) => ({ ...student, submissions: [...student.submissions, submission] }));
      return { ...prev, student, students };
    });
    return data;
  };

  const updateSubmissionState = (data) => {
    setState((prev) => {
      const submissions = state.student.submissions.map((submission) => submission.id === data.id ? { ...data } : { ...submission });
      const student = { ...prev.student, submissions };
      return { ...prev, student, };
    });
    return data;
  };


  // api requests
  const postAssignment = async (body) => {
    const { data: assignment } = await axios.post('/assignments', body);
    addAssignmentToState(assignment);
    postSubmission(assignment);
    return assignment;
  };

  const putAssignment = async (id, body) => {
    const { data: assignment } = await axios.put(`/assignments/${id}`, body);
    updateAssignmentState(assignment);
    return assignment;
  };

  const deleteAssignment = async (id) => {
    const { data: assignment } = await axios.delete(`/assignments/${id}`);
    removeAssignmentFromState(assignment);
    return assignment;
  };

  const postSubmission = async (body) => {
    const { data: submissions } = await axios.post('/submissions', { assignmentId: body.id, dueDate: body.defaultDueDate });
    addSubmissionToStudentsState(submissions);
    return submissions;
  };

  const patchSubmission = async (id, body) => {
    const { data: submission } = await axios.patch(`/submissions/${id}`, body);
    updateSubmissionState(submission);
    return submission;
  };

  return {
    postAssignment,
    putAssignment,
    deleteAssignment,
    patchSubmission,
  };

};

export default useRequest;
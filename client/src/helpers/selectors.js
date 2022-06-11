export const assignmentsSelector = (assignments, id) => {
  return assignments.map((item) => {
    item.assigned = item.studentAssignments.find(({ studentId }) => studentId === id);
    return item;
  });
};


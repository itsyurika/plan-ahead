
// = exported helpers =
export const getTablePositions = (assignments) => {
  if (!assignments?.length) return [];

  const newCards = assignments.map((item) => ({
    ...item,
    column: new Date(item.defaultDueDate).getDay() + 2, // monday column starts at 3
  }));

  const count = {};
  newCards.forEach((item) => {
    if (!count[item.column]) count[item.column] = 1;
    item.row = count[item.column];
    count[item.column]++;
  });
  console.log("assignments from getTablePositions: ", newCards);

  return newCards;
};

export const buildStudentCards = (assignments, student) => {
  if (!assignments.length || !student.id) return [];
  console.log("student assignments list: ", student.studentAssignments);
  const foundAssignments = student.studentAssignments.map((item) => ({
    ...assignments.find((assign) => assign.id === item.assignmentId),
    assigned: { ...item }
  })
  );

  console.log("found assignments from buildStudentCards:", foundAssignments )
  return foundAssignments;
};
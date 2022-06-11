export const buildCards = (assignments, id) => {
  const newCards = assignments.map((item) => ({
    ...item,
    column: new Date(item.defaultDueDate).getDay() + 2, // monday column starts at 3
    assigned: item.studentAssignments.find(({ studentId }) => studentId === id),
  }));

  const count = {};
  newCards.forEach((item) => {
    if (!count[item.column]) count[item.column] = 1;
    item.row = count[item.column];
    count[item.column]++;
  });

  return newCards.filter((item) => item.assigned);
};
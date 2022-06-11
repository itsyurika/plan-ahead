export const buildCards = (assignments, id) => {


  console.log('assignment1 date', new Date(assignments[0]?.defaultDueDate));


  const newCards = assignments.map((item) => ({
    ...item,
    column: new Date(item.defaultDueDate).getDay() + 2, // monday column starts at 3
    assigned: item.studentAssignments.find(({ studentId }) => studentId === id),
  })
  );


  console.log('new cards before', newCards);
  const count = { };
  newCards.forEach((item) => {
    item.row = count[item.column] || 1;
    count[item.column]++;
  });

  console.log('new cards after', newCards);

  return newCards;
};


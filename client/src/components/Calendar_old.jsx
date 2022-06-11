import CreateAssignment from "components/CreateAssignment";

const Calendar = (props) => {
  return (
    <section className="calendar">
      {props.children}
      <CreateAssignment />
    </section>
  );
};

export default Calendar;
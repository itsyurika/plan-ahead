import { useState } from "react";
import 'components/styles/Calendar.scss';
import 'components/styles/CalendarReact.scss';
import { getAssignmentsForDay } from "helpers/selectors";
import Card from "components/Card";

import {
  format,
  getMonth,
  getWeekOfMonth,
  addDays,
  addWeeks,
  subWeeks,
  startOfWeek,
  isSameDay,
  parseISO,
} from "date-fns";


const Calendar = (props) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);

  // = helpers =
  const cards = props.assignments.map((assign) => (
    <div key={assign.id} className={`card row${assign.row} column${assign.column} calendar2`}>
      <Card {...assign} onClick={() => { props.onFocus(assign.id); }} />
    </div>
  ));

  const getDatesForWeek = (date) => {
    const startDate = startOfWeek(date, { weekStartsOn: 1 });
    return [...Array(5)].map((_, i) => addDays(startDate, i));
  };

  const sortAssignmentsByDay = (assignments, week) => {
    const sorted = assignments.sort((a, b) => parseISO(a.assigned.dueDate || a.defaultDueDate) - parseISO(b.assigned.dueDate || b.defaultDueDate));
    return week.map((day) => sorted.filter((item) => isSameDay(parseISO(item.assigned.dueDate), day))
    );
  };

  const renderHeader = () => {
    const daysHeader = [];
    const startDate = startOfWeek(selectedDate, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      daysHeader.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), 'dd eeee')}
        </div>
      );
    }
    return <header className="days row days-header"><div className="col col-center">Week {getWeekOfMonth(selectedDate)}</div>{daysHeader}</header>;
  };

  const renderRows = () => {
    const dates = getDatesForWeek(selectedDate);
    const sorted = sortAssignmentsByDay(props.assignments, dates);

    const totalRows = 4;
    const rows = [];
    for (let i = 0; i < totalRows; i++) {
      rows.push(<div className="row" key={i}>
        <div className={`col cell`} key={i} >
          <span className={`label`}></span>
        </div>

        {sorted.map((day, j) => (
          <div className={'col cell'} key={j} >
            <div className="card">
              <Card {...day[i]} />
            </div>
          </div>
        ))}

      </div>);
    }

    return rows;
  };


  // render calendar
  return (
    <section className="calendar">
      <header>
        <div className="col col-start">
          <div className="icon" onClick={() => { setSelectedDate(subWeeks(selectedDate, 1)); }}>
            Previous
          </div>
        </div>

        <div className="col col-center icon" onClick={() => { setSelectedDate(new Date()); }}>
          <p>Today is</p> <p>{format(today, 'eeee MMM do')}</p>
        </div>
        <div className="col col-end" onClick={() => { setSelectedDate(addWeeks(selectedDate, 1)); }}>
          <div className="icon">Next</div>
        </div>
      </header>
      {renderHeader()}
      {renderRows()}
    </section>
  );
};

export default Calendar;


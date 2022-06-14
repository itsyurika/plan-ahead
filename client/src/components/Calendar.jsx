import 'components/styles/Calendar.scss';
import 'components/styles/CalendarReact.scss';
import { useState } from "react";
import { getDatesForWeek, sortAssignmentsByDay } from "helpers/selectors";
import {
  format,
  getWeekOfMonth,
  addDays,
  addWeeks,
  subWeeks,
  startOfWeek,
} from "date-fns";

import Card from "components/Card";


const Calendar = (props) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);

  // = helpers =
  const renderHeader = (date) => {
    const daysHeader = [];
    const startDate = startOfWeek(date, { weekStartsOn: 1 });

    for (let i = 0; i < 7; i++) {
      daysHeader.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), 'dd eeee')}
        </div>
      );
    }
    return (
      <header className="days row days-header">
        <div className="col col-center">Week {getWeekOfMonth(date)}</div>
        {daysHeader}
      </header>
    );
  };

  const renderRows = (date) => {
    const dates = getDatesForWeek(date);
    const sorted = sortAssignmentsByDay(props.assignments, dates);
    const rows = [];
    const totalRows = 4;

    for (let i = 0; i < totalRows; i++) {
      rows.push(
        <div className="row" key={i}>
          <div className={`col cell`} key={i}>
            <span className={`label`}></span>
          </div>

          {sorted.map((day, j) => (
            <div className={'card col cell'} key={j}>
              <Card row={i} {...day[i]} onClick={() => { props.onFocus(day[i].id); }} onAdd={props.onAdd} />
            </div>
          ))}

        </div>
      );
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

      {renderHeader(selectedDate)}
      {renderRows(selectedDate)}

      {renderHeader(addWeeks(selectedDate, 1))}
      {renderRows(addWeeks(selectedDate, 1))}
    </section>
  );
};

export default Calendar;


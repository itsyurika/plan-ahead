import { useState, useEffect } from "react";
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
  lastDayOfWeek,
} from "date-fns";

const headerFormat = "eeee MMM do";
const dayFormat = "ee eeee";

const Calendar = (props) => {
  const [today, setToday] = useState(new Date);

  console.log('today', today, 'month', getMonth(today), 'week', getWeekOfMonth(today));


  // = helpers =
  const cards = props.assignments.map((assign) => (
    <div key={assign.id} className={`card row${assign.row} column${assign.column} calendar2`}>
      <Card {...assign} onClick={() => { props.onFocus(assign.id); }} />
    </div>
  ));

  const getDatesForWeek = () => {
    const startDate = startOfWeek(today, { weekStartsOn: 1 });
    return [...Array(5)].map((k, i) => addDays(startDate, i));
  };

  const renderDays = () => {
    const daysHeader = [];
    const startDate = startOfWeek(getMonth(today), { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      daysHeader.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dayFormat)}
        </div>);
    }
    return <header className="days row days-header"><div className="col col-center">Week {getWeekOfMonth(today)}</div>{daysHeader}</header>;
  };

  const renderCells = () => {
    const startDate = startOfWeek(today, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(today, { weekStartsOn: 1 });

    console.log('start date', startDate, 'end', endDate);
    const rows = [];
    let days = [];
    let day = startDate;
    while (day <= endDate) {
      days.push(
        <div
          className={`col cell`}
          key={day}
        >
          <span className={`label col-span-${days.length}`}></span>
        </div>
      );

      for (let i = 0; i < 5; i++) {
        let assnForDay = getAssignmentsForDay(props.assignments, day);
        days.push(
          <div className={'col cell'} key={format(day, 'ee')}   >
            <div className="card">
              <Card {...assnForDay[0]} onClick={() => { props.onFocus(props.assignments[0].id); }} />
            </div>
          </div>
        );
        day = addDays(day, 1);
      }

      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };


  // render calendar
  return (
    <section className="calendar">
      <header>
        <div className="col col-start">
          <div className="icon" onClick={() => { setToday(subWeeks(today, 1)); }}>
            Previous
          </div>
        </div>
        <div className="col col-center">
          <span>Today is {format(today, headerFormat)}</span>
        </div>
        <div className="col col-end" onClick={() => { setToday(addWeeks(today, 1)); }}>
          <div className="icon">Next</div>
        </div>
      </header>
      {renderDays()}
      {renderCells()}
    </section>
  );
};

export default Calendar;


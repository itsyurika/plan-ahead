import { useState } from "react";
import 'components/styles/Calendar.scss';
import 'components/styles/CalendarReact.scss';
import { getAssignmentsForDay } from "helpers/selectors";
import Cell from "./Cell";

import {
  format,
  startOfWeek,
  addDays,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks
} from "date-fns";

const headerFormat = "eeee MMM do";
const dayFormat = "eeee";

const Calendar = (props) => {
  const cards = props.assignments.map((assign) => (
    <div key={assign.id} className={`card row${assign.row} column${assign.column} calendar2`}>
      <Cell {...assign} onClick={() => { props.onFocus(assign.id); }} />
    </div>
  ));

  //? React Calendar component //
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));

  const showPrev = () => {
    setCurrentMonth(subWeeks(currentMonth, 1));
    setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
  };

  const showNext = () => {
    setCurrentMonth(addWeeks(currentMonth, 1));
    setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));

  };



  const renderDays = () => {
    const days = [];
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    days.push(<thead className="col col-center" ></thead>);
    for (let i = 0; i < 5; i++) {
      days.push(
        <th className="col col-center" key={i}>
          {format(addDays(startDate, i), dayFormat)}
        </th>
      );
    }
    days.push(<>
      <th className="col col-center" key={5}>
        {format(addDays(startDate, 5), dayFormat)}
      </th>
      <th className="col col-center" key={6}>
        {format(addDays(startDate, 6), dayFormat)}
      </th></>
    );
    return <div className="days row">{days}</div>;
  };

  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(addWeeks((currentMonth), 1), { weekStartsOn: 1 });
    const rows = [];
    let days = [];
    let day = startDate;
    while (day <= endDate) {
      days.push(
        <div
          className={`col cell`}
          key={day}
        >
          <span className="label">Week 1</span>
        </div>
      );
      for (let i = 0; i < 7; i++) {
        let assnForDay = getAssignmentsForDay(props.assignments, day);
        days.push(
          <div className={'col cell'} key={day}   >
            <div className="card">
              <Cell {...assnForDay[0]} onClick={() => { props.onFocus(props.assignments[0].id); }} />
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
          <div className="icon" onClick={showPrev}>
            Previous
          </div>
        </div>
        <div className="col col-center">
          <span>Today is {format(new Date(), headerFormat)}</span>
        </div>
        <div className="col col-end" onClick={showNext}>
          <div className="icon">Next</div>
        </div>
      </header>

      {renderDays()}
      {renderCells()}
    </section>
  );
};

export default Calendar;


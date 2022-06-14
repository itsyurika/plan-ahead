import { useState } from "react";
import 'components/styles/Calendar.scss';
import 'components/styles/CalendarReact.scss';
import { getAssignmentsForDay } from "helpers/selectors";
import Card from "components/Card";

import {
  format,
  startOfWeek,
  addDays,
  lastDayOfWeek,
  getMonth,
  getWeek,
  addWeeks,
  subWeeks
} from "date-fns";

const headerFormat = "eeee MMM do";
const dayFormat = "ee eeee";

const Calendar = (props) => {
  const cards = props.assignments.map((assign) => (
    <div key={assign.id} className={`card row${assign.row} column${assign.column} calendar2`}>
      <Card {...assign} onClick={() => { props.onFocus(assign.id); }} />
    </div>
  ));

  const [currentMonth, setCurrentMonth] = useState(getMonth(new Date));
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
    const daysHeader = [];
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      daysHeader.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dayFormat)}
        </div>);
    }
    return <header className="days row days-header"><div className="col col-center"></div>{daysHeader}</header>;
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
          <span className="label">Week {currentWeek}</span>
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


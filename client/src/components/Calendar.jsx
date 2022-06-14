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
  subWeeks,
  getWeekOfMonth,
} from "date-fns";

const headerFormat = "eeee MMM do";
const dayFormat = "ee eeee";

const Calendar = (props) => {
  const [today, setToday] = useState(new Date);
  const [currentMonth, setCurrentMonth] = useState(getMonth(today));
  const [currentWeek, setCurrentWeek] = useState(getWeekOfMonth(today));

  console.log('today', today, 'month', currentMonth, 'week', currentWeek);


  // = helpers =
  const cards = props.assignments.map((assign) => (
    <div key={assign.id} className={`card row${assign.row} column${assign.column} calendar2`}>
      <Card {...assign} onClick={() => { props.onFocus(assign.id); }} />
    </div>
  ));

  const showPrev = () => {
    setToday(subWeeks(today, 1))
    setCurrentMonth(subWeeks(currentMonth, 1));
    setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
  };

  const showNext = () => {
    setToday(addWeeks(today, 1))
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
    return <header className="days row days-header"><div className="col col-center">Week {currentWeek}</div>{daysHeader}</header>;
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
          <div className="icon" onClick={showPrev}>
            Previous
          </div>
        </div>
        <div className="col col-center">
          <span>Today is {format(today, headerFormat)}</span>
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


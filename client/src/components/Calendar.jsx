import { useState } from "react";
import 'components/styles/Calendar.scss';
import 'components/styles/CalendarReact.scss';

import Card from "./Card";

import {
  format,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks
} from "date-fns";
import './CalendarReact.scss';
import Slot from "./Slot";
import { getAssignmentsForDay } from "helpers/selectors";


const Calendar = (props) => {
  const cards = props.assignments.map((assign) => (
    <div key={assign.id} className={`card row${assign.row} column${assign.column} calendar2`}>
      <Card {...assign} onClick={() => { props.onFocus(assign.id); }} />
    </div>
  ));

  //? React Calendar component //
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());

  const changeWeekHandle = (btnType) => {
    if (btnType === "prev") {
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "next") {
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };


  const renderHeader = () => {
    const dateFormat = "eeee MMM do";
    return (
      <header className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={() => changeWeekHandle("prev")}>
            Previous
          </div>
        </div>
        <div className="col col-center">
          <span>Today is {format(new Date(), dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={() => changeWeekHandle("next")}>
          <div className="icon">Next</div>
        </div>
      </header>
    );
  };


  const renderDays = () => {
    const dateFormat = "EEE";
    const days = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    days.push(<div className="col col-center" ></div>);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
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
            <span className="label">placeholder</span>
          </div>
      )
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        let assnForDay = getAssignmentsForDay(props.assignments, day)
        days.push(
          <div
            className={`col cell ${
              isSameDay(day, new Date())
                ? "today"
                : ""
            }`}
            key={day}
          >
            <span className="number">{formattedDate}</span>
            <div className="slot">
            <Slot {...assnForDay[0]} onClick={() => { props.onFocus(props.assignments[0].id); }} />
            </div>
            <div className="slot">
            <Slot {...assnForDay[1]} onClick={() => { props.onFocus(props.assignments[0].id); }} />
            </div>
            <div className="slot">
            <Slot {...assnForDay[2]} onClick={() => { props.onFocus(props.assignments[0].id); }} />
            </div>
            <div className="slot">
            <Slot {...assnForDay[3]} onClick={() => { props.onFocus(props.assignments[0].id); }} />
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
      <header>February 2019 Week 6</header>


      {renderHeader()}

      {renderDays()}

      {renderCells()}

    </section>);
};

export default Calendar;


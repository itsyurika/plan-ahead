import { useState } from "react";
import 'components/styles/Calendar.scss';
import 'components/styles/CalendarReact.scss';

import Card from "./Card";

import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks
} from "date-fns";


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
    //console.log("current week", currentWeek);
    if (btnType === "prev") {
      //console.log(subWeeks(currentMonth, 1));
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "next") {
      //console.log(addWeeks(currentMonth, 1));
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };



  const renderHeader = () => {
    const dateFormat = "eeee MMM do";
    // console.log("selected day", selectedDate);
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={() => changeWeekHandle("prev")}>
            prev week
          </div>
        </div>
        <div className="col col-center">
          <span>Today is {format(new Date(), dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={() => changeWeekHandle("next")}>
          <div className="icon">next week</div>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const dateFormat = "EEE";
    const days = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    days.push(
      <div className="col col-center" >
        Placeholder
      </div>
    );
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
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      days.push(
        <div
          className={`col cell`}
          key={day}

        >
          <span className="label">placeholder</span>
        </div>
      );
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        days.push(
          <div
            className={`col cell ${isSameDay(day, new Date())
              ? "today"
              : ""
              }`}
            key={day}

          >
            <span className="number">{formattedDate}</span>
            <Card {...props.assignments[0]} onClick={() => { props.onFocus(props.assignments[0].id); }} />

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
  //? End of React Calendar component //


  return (
    <section className="calendar">
      <header>February 2019 Week 6</header>
      <div className="days-header">
        <div className="filler"></div>
        <div className="filler"></div>
        <div className="day">Mon 4</div>
        <div className="day">Tue 5</div>
        <div className="day">Wed 6</div>
        <div className="day">Thu 7</div>
        <div className="day current">Fri 8</div>
        <div className="day wknd">Sat 9</div>
        <div className="day wknd">Sun 10</div>
      </div>


      {renderHeader()}

      {renderDays()}

      {renderCells()}

      <div className="cells-container">
        <div className="time" style={{ "gridRow": "1" }}></div>
        <div className="time label" style={{ "gridRow": "2" }}></div>
        <div className="time" style={{ "gridRow": "3" }}></div>
        <div className="time" style={{ "gridRow": "4" }}></div>
        <div className="filler-col"></div>

        <div className="col label" style={{ "gridColumn": "1" }}>Week 3 June 20-26</div>
        <div className="col" style={{ "gridColumn": "3" }}></div>
        <div className="col" style={{ "gridColumn": "4" }}></div>
        <div className="col" style={{ "gridColumn": "5" }}></div>
        <div className="col" style={{ "gridColumn": "6" }}></div>
        <div className="col" style={{ "gridColumn": "7" }}></div>
        <div className="col weekend" style={{ "gridColumn": "8" }}></div>
        <div className="col weekend" style={{ "gridColumn": "9" }}></div>
        <div className="row" style={{ "gridRow": "1" }}></div>
        <div className="row" style={{ "gridRow": "2" }}></div>
        <div className="row" style={{ "gridRow": "3" }}></div>
        <div className="row" style={{ "gridRow": "4" }}></div>
        {cards}
      </div>
    </section>);
};

export default Calendar;


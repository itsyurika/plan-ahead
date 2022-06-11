import './Calendar.scss';

import Assignment from "./TimeSlot";
import CreateAssignment from "components/CreateAssignment";

const Calendar = (props) => {

  const buildCards = (assignments) => {
    return props.assignments.map((assignment) => {
      return (
        <div className={`card row${assignment.row} column${assignment.column} calendar2`}>
          <Assignment {...assignment} onClick={props.onClick} />
        </div>
      );
    });
  };




  return (
    <div className="container">
      <div className="title">February 2019 Week 6</div>
      <div className="days">
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
      <div className="content">
        <div className="time" style={{ "grid-row": "1" }}></div>
        <div className="time label" style={{ "grid-row": "2" }}></div>
        <div className="time" style={{ "grid-row": "3" }}></div>
        <div className="time" style={{ "grid-row": "4" }}></div>
        <div className="filler-col"></div>

        <div className="col label" style={{ "grid-column": "1" }}>Week 3 June 20-26</div>
        <div className="col" style={{ "grid-column": "3" }}></div>
        <div className="col" style={{ "grid-column": "4" }}></div>
        <div className="col" style={{ "grid-column": "5" }}></div>
        <div className="col" style={{ "grid-column": "6" }}></div>
        <div className="col" style={{ "grid-column": "7" }}></div>
        <div className="col weekend" style={{ "grid-column": "8" }}></div>
        <div className="col weekend" style={{ "grid-column": "9" }}></div>
        <div className="row" style={{ "grid-row": "1" }}></div>
        <div className="row" style={{ "grid-row": "2" }}></div>
        <div className="row" style={{ "grid-row": "3" }}></div>
        <div className="row" style={{ "grid-row": "4" }}></div>
        <div className="card card1 calendar1">Event 1</div>
        {buildCards(props.assignments)}
      </div>



      <CreateAssignment />
    </div>);
};

export default Calendar;


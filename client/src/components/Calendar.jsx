import './Calendar.scss';

import Assignment from "./Slot";
import CreateAssignment from "components/CreateAssignment";

const Calendar = (props) => {
  const buildCards = (assignments) => {
    return assignments.map((assignment) => {
      return (
        <div key={assignment.id} className={`card row${assignment.row} column${assignment.column} calendar2`}>
          <Assignment  {...assignment} onClick={props.onClick} />
        </div>
      );
    });
  };




  return (
    <div className="card-container">
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
        {buildCards(props.assignments)}
      </div>



      <CreateAssignment />
    </div>);
};

export default Calendar;


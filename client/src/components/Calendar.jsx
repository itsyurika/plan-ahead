import CreateAssignment from "components/CreateAssignment";
import './Calendar.scss';

const Calendar = () => {
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
    <div className="day">Sat 9</div>
    <div className="day">Sun 10</div>
  </div>
  <div className="content">
    <div className="time" style={{"grid-row": "1"}}></div>
    <div className="time" style={{"grid-row": "2"}}></div>
    <div className="time" style={{"grid-row": "3"}}></div>
    <div className="time" style={{"grid-row": "4"}}></div>
    <div className="time" style={{"grid-row": "5"}}></div>
    <div className="time" style={{"grid-row": "6"}}></div>
    <div className="filler-col"></div>
    <div className="col" style={{"grid-column": "3"}}></div>
    <div className="col" style={{"grid-column": "4"}}></div>
    <div className="col" style={{"grid-column": "5"}}></div>
    <div className="col" style={{"grid-column": "6"}}></div>
    <div className="col" style={{"grid-column": "7"}}></div>
    <div className="col weekend" style={{"grid-column": "8"}}></div>
    <div className="col weekend" style={{"grid-column": "9"}}></div>
    <div className="row" style={{"grid-row": "1"}}></div>
    <div className="row" style={{"grid-row": "2"}}></div>
    <div className="row" style={{"grid-row": "3"}}></div>
    <div className="row" style={{"grid-row": "4"}}></div>
    <div className="row" style={{"grid-row": "5"}}></div>
    <div className="row" style={{"grid-row": "6"}}></div>
    <div className="event event1 calendar1">Event 1</div>
    <div className="event event2 calendar2">Event 2</div>

    <div className="current-time">
      <div className="circle"></div>
    </div>
  </div>
  <div className="days">
    <div className="filler"></div>
    <div className="filler"></div>
    <div className="day">Mon 4</div>
    <div className="day">Tue 5</div>
    <div className="day">Wed 6</div>
    <div className="day">Thu 7</div>
    <div className="day current">Fri 8</div>
    <div className="day">Sat 9</div>
    <div className="day">Sun 10</div>
  </div>
  <div className="content">
    <div className="time" style={{"grid-row": "1"}}></div>
    <div className="time" style={{"grid-row": "2"}}></div>
    <div className="time" style={{"grid-row": "3"}}></div>
    <div className="time" style={{"grid-row": "4"}}></div>
    <div className="time" style={{"grid-row": "5"}}></div>
    <div className="time" style={{"grid-row": "6"}}></div>
    <div className="filler-col"></div>
    <div className="col" style={{"grid-column": "3"}}></div>
    <div className="col" style={{"grid-column": "4"}}></div>
    <div className="col" style={{"grid-column": "5"}}></div>
    <div className="col" style={{"grid-column": "6"}}></div>
    <div className="col" style={{"grid-column": "7"}}></div>
    <div className="col weekend" style={{"grid-column": "8"}}></div>
    <div className="col weekend" style={{"grid-column": "9"}}></div>
    <div className="row" style={{"grid-row": "1"}}></div>
    <div className="row" style={{"grid-row": "2"}}></div>
    <div className="row" style={{"grid-row": "3"}}></div>
    <div className="row" style={{"grid-row": "4"}}></div>
    <div className="row" style={{"grid-row": "5"}}></div>
    <div className="row" style={{"grid-row": "6"}}></div>
    <div className="event event1 calendar1">Event 1</div>
    <div className="event event2 calendar2">Event 2</div>
    <div className="current-time">
      <div className="circle"></div>
    </div>
  </div>
</div>
 
  );
};

export default Calendar;


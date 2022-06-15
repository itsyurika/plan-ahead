import 'components/styles/Calendar.scss';
import 'components/styles/CalendarReact.scss';
import { useState } from 'react';
import { getDatesForWeek, sortAssignmentsByDay } from 'helpers/selectors';
import {
  format,
  getWeekOfMonth,
  addDays,
  addWeeks,
  subWeeks,
  startOfWeek,
  isSameDay,
} from 'date-fns';

import Card from 'components/Card';

const Calendar = (props) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);

  // = helpers =
  const buildHeader = (date) => {
    const daysHeader = [];
    const startDate = startOfWeek(date, { weekStartsOn: 1 });

    for (let i = 0; i < 7; i++) {
      const current = addDays(startDate, i);
      daysHeader.push(
        <div className={`col day-label ${isSameDay(current, today) ? 'selected' : ''}`} key={i}>
          {format(current, 'dd eeee')}
        </div>
      );
    }
    return (
      <header className='row days-header'>
        <div className='col'>Week {getWeekOfMonth(date)}</div>
        {daysHeader}
      </header>
    );
  };

  const buildRows = (date) => {
    const dates = getDatesForWeek(date);
    const sorted = sortAssignmentsByDay(props.assignments, dates);
    const rows = [];
    const totalRows = 4;

    for (let i = 0; i < totalRows; i++) {
      rows.push(
        <div className='row' key={i}>
          <div className={`cell`} key={i}>
            <span className={`label`}></span>
          </div>

          {sorted.map((list, j) => (
            <div className={`card`} key={j}>
              <Card
                {...list[i]}
                admin={props.admin}
                lastRow={totalRows === i + 1}
                onClick={() => { props.onFocus(list[i].id); }}
                onAdd={() => props.onAdd(dates[j])} />
            </div>
          ))}

        </div>
      );
    }

    return rows;
  };

  const renderTable = (date) => {
    return (
      <section className='table'>
        {buildHeader(date)}
        {buildRows(date)}
      </section>
    );
  };

  // render calendar
  return (
    <section className='calendar'>
      <header>
        <div className='col col-start'>
          <div className='icon' onClick={() => { setSelectedDate(subWeeks(selectedDate, 1)); }}>
            Previous
          </div>
        </div>

        <div className='col col-center icon' onClick={() => { setSelectedDate(new Date()); }}>
          <p>Today is</p> <p>{format(today, 'eeee MMM do')}</p>
        </div>
        <div className='col col-end' onClick={() => { setSelectedDate(addWeeks(selectedDate, 1)); }}>
          <div className='icon'>Next</div>
        </div>
      </header>

      {renderTable(selectedDate)}
      {renderTable(addWeeks(selectedDate, 1))}

    </section>
  );
};

export default Calendar;


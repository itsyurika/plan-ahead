// import 'components/styles/CalendarReact.scss';
import 'components/styles/Calendar.scss';
import { useState } from 'react';
import { getDatesForWeek, sortAssignmentsByDay } from 'helpers/selectors';
import {
  format,
  addDays,
  addWeeks,
  startOfWeek,
  isSameDay,
} from 'date-fns';

import DayColumn from 'components/DayColumn';
import Card from 'components/Card';

const Calendar = (props) => {
  const today = new Date();
  const totalRows = 3;
  const [selectedDate, setSelectedDate] = useState(today);

  // = helpers =
  const renderTable = (date) => {
    const dates = getDatesForWeek(date);
    const sorted = sortAssignmentsByDay(props.assignments, dates);

    const columns = dates.map((date, i) => (
      <DayColumn key={i}
        selected={isSameDay(date, today) ? 'selected' : ''}
        admin={props.admin}
        lastRow={totalRows === i + 1}
        onFocus={props.onFocus}
        onAdd={() => props.onAdd(date)}
        day={date} cards={sorted[i]} totalRows={totalRows}
      />));


    return (
      <section className='table'>
        <main className={'day-column filler'}>
          <header className={'cell day-label'}>
            {format(date, 'MMMM')}
          </header>

          <div className='col label filler'>
            {'Week ' + Math.ceil(date.getDate() / 7)}
          </div>
        </main>

        {columns}
      </section>
    );
  };

  const buildHeader = (date) => {
    const daysHeader = [];
    const startDate = startOfWeek(date, { weekStartsOn: 1 });

    for (let i = 0; i < 7; i++) {
      const day = addDays(startDate, i);
      daysHeader.push(
        <div className={`col day-label ${isSameDay(day, today) ? 'selected' : ''}`} key={i}>
          {format(day, 'dd eeee')}
        </div>
      );
    }

    return (
      <header className='row days-header'>
        <div className='col filler'>{format(date, 'MMMM')}</div>
        {daysHeader}
      </header>
    );
  };

  const buildRows = (date) => {
    const dates = getDatesForWeek(date);
    const sorted = sortAssignmentsByDay(props.assignments, dates);
    const rows = [];

    const label = 'Week ' + Math.ceil(date.getDate() / 7);

    for (let i = 0; i < totalRows; i++) {
      rows.push(
        <div className='card-row' key={i}>
          <div className={`col filler`}>
            <p className={`label`}>{i === 0 && label}</p>
          </div>

          {sorted.map((list, j) => (
            <div className={`col card-container ${isSameDay(dates[j], today) ? 'selected' : ''}`} key={j}>
              <Card
                {...list[i]}
                admin={props.admin}
                lastRow={totalRows === i + 1}
                onClick={() => { props.onFocus(list[i].id); }}
                onAdd={() => props.onAdd(dates[j])} />
            </div>
          ))}

          <div className={`col`}></div>
          <div className={`col`}></div>
        </div>
      );
    }

    return (
      <section className='rows'>
        {rows}
      </section>
    );
  };


  // render calendar
  return (
    <section className='calendar'>
      <header>
        <div className='col col-start'>
          <div className='icon' onClick={() => { setSelectedDate(addWeeks(selectedDate, -1)); }}>
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


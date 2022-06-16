import 'components/styles/Header.scss';
import 'components/styles/Calendar.scss';

import { useState } from 'react';
import { format, addWeeks, isSameDay, } from 'date-fns';
import { getDatesForWeek, sortAssignmentsByDay } from 'hooks/helpers';

import Column from 'components/Column';

const Calendar = (props) => {
  const today = new Date();
  const totalRows = 3;
  const [selectedDate, setSelectedDate] = useState(today);

  // = helpers =
  const renderTable = (date) => {
    const dates = getDatesForWeek(date);
    const sorted = sortAssignmentsByDay(props.assignments, dates);

    const columns = dates.map((date, i) => (
      <Column key={i}
        selected={isSameDay(date, today) ? 'selected' : ''}
        admin={props.admin}
        lastRow={totalRows === i + 1}
        onFocus={props.onFocus}
        onAdd={() => props.onAdd(date)}
        day={date} cards={sorted[i]} totalRows={totalRows}
      />));

    return (
      <section className='table'>
        <main className={'table__column'}>
          <header className={'cell label'}>
            <p>{format(date, 'MMMM')}</p>
          </header>

          <div className='cell label'>
            <p>{'Week ' + Math.ceil(date.getDate() / 7)}</p>
            <p>{format(dates[0], 'MMM dd')} - {format(dates[dates.length - 1], 'MMM dd')}</p>
          </div>
        </main>

        {columns}
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
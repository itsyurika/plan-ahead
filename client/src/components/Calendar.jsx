import 'components/styles/Header.scss';
import 'components/styles/Calendar.scss';

import { useState } from 'react';
import { format, addWeeks, isSameDay, isBefore, addDays } from 'date-fns';
import { getDatesForWeek, filterAssignmentsByDay } from 'hooks/helpers';

import Column from 'components/Column';

const getStyle = (day, today) => {
  if (isSameDay(day, today)) return 'selected';
  if (isBefore(day, today)) return 'past';
  if (isBefore(day, addDays(today, 3))) return 'near';
  return 'upcoming';
};


const Calendar = (props) => {
  const today = new Date();
  const totalRows = 3;
  const [selectedDate, setSelectedDate] = useState(today);

  // = helpers =
  const renderTable = (date) => {
    const dates = getDatesForWeek(date);
    const sorted = filterAssignmentsByDay(props.assignments, dates);

    const columns = dates.map((date, i) => (
      <Column key={i}
        day={date}
        admin={props.admin}
        cards={sorted[i]}
        totalRows={totalRows}
        onFocus={props.onFocus}
        onAdd={() => props.onAdd(date)}
        style={getStyle(date, today)}
      />));

    return (
      <section className={`table`} onClick={props.closePopup}>
        <main className={`table__column ${isBefore(date, today) ? 'past' : ''}`}>
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
    <section className={`calendar ${props.admin}`}>
      <header>
        <div className='col col-start'>
          <div className='icon' onClick={() => { setSelectedDate(addWeeks(selectedDate, -1)); }}>
          <i className="fa-solid fa-angle-left"></i>
          </div>
        </div>

        <div className='col col-center' onClick={() => { setSelectedDate(new Date()); }}>
          <p>Today is</p> <p>{format(today, 'eeee, MMMM do')}</p>
        </div>
        <div className='col col-end' onClick={() => { setSelectedDate(addWeeks(selectedDate, 1)); }}>
          <div className='icon'><i className="fa-solid fa-angle-right"></i></div>
        </div>
      </header>

      {renderTable(selectedDate)}
      {renderTable(addWeeks(selectedDate, 1))}
    </section>
  );
};

export default Calendar;
import { format, } from 'date-fns';

import Card from 'components/Card';


const DayColumn = (props) => {

  return (
    <main className={`day-column ${props.selected}`}>
      <header className={`col day-label`}>
        {format(props.day, 'dd eeee')}
      </header>
      {[...Array(props.totalRows)].map((_, i) => (
        <div key={i} className={'card-container'}>
          <Card
            {...props.cards[i]}
            onClick={() => props.onFocus(props.cards[i].id)}
            admin={props.admin}
            lastRow={props.totalRows === i + 1}
            onAdd={() => props.onAdd(props.day)}
          />
        </div>))}
    </main>
  );
};

export default DayColumn;
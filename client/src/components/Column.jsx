import { format, } from 'date-fns';
import Card from 'components/Card';

const Column = (props) => {
  return (
    <main className={`table__column cards-column ${props.style} `}>
      <header className={`cell label`}>
        <p className='date'>{format(props.day, 'dd')}</p>
        <p>{format(props.day, 'eee')}</p>
      </header>
      {[...Array(props.totalRows)].map((_, i) => (
        <div key={i} className={'cell card-cell'}>
          <Card
            {...props.cards[i]}
            onClick={() => props.onFocus(props.cards[i].id)}
            admin={props.admin}
            onAdd={props.onAdd}
            lastRow={props.totalRows === i + 1}
            day={props.day}
          />
        </div>))}
    </main>
  );
};

export default Column;
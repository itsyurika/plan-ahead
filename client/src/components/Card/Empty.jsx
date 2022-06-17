import { addDays, isPast } from "date-fns";

const Empty = (props) => {
  return (
    <main className="card__empty">
      <img
        hidden={!props.lastRow || !props.admin || isPast(addDays((props.day), 1))}
        className="card__add-button "
        src="/images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
    </main>
  );
};

export default Empty;
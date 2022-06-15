const Empty = (props) => {
  return (
    <main className="card__empty">
      <img
        hidden={!(props.lastRow && props.admin)}
        className="card__add-button"
        src="/images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
    </main>
  );
};

export default Empty;
const Empty = (props) => {
  return (
    <main className="card__add">
      <img
        className="card__add-button"
        src="images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
    </main>
  );
};

export default Empty;
import React from "react";

export default (props) => {
  return (
    <main className="assignment__add">
      <img
        className="assignment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
    </main>
  );
};
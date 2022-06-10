import React from "react";

export default (props) => {
  return (
    <main className="assignment__show">
      <p>{props.name}</p>
      <p>{props.description}</p>
      <p>{props.url}</p>
      <p>Math</p>
      <p>Status: Started!</p>
      <button>Start!</button>
      <button>Complete!</button>

      
    </main>

  )}
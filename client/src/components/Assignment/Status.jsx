
const Status = (props) => {
  console.log("status props", props)

return (
        <div id="status-buttons">
          {props.status === 'Not started' && < button className="start-btn" onClick={props.onStart}>Start</button>}
          {props.status === 'Started' && < button className="start-btn" onClick={props.onComplete}>Complete</button>}
          {props.status === 'Started' && < button className="undo-btn" onClick={props.onCancelStarted}>Undo Started</button>}
          {props.status === 'Complete' && < button className="undo-btn" onClick={props.onCancelComplete}>Cancel Submission</button>}
        </div>
  )
}

export default Status;
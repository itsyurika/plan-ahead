import Button from 'components/Button';

const Status = (props) => {
  return (
    <div className='status__form' >
      {props.assigned.dateCompleted && <img className={'star-img'} src="/images/star.png" />}
      {!props.assigned.dateCompleted && props.assigned.dateStarted && <img className={'bear-img'} src="/images/bear.png" />}
      <p className='progress'>Your Progress:&nbsp;&nbsp;<span>{props.status}!</span></p>
      <div className='buttons'>
        {props.status === 'Not started' && <Button style="confirm" action={props.onStart}>Start</Button>}
        {props.status === 'Complete' && <Button style="warning" action={props.onCancelComplete}>Cancel Submission</Button>}
        {props.status === 'Started' && <>
          <Button style="warning" action={props.onCancelStarted}>Undo Started</Button>
          <Button style="confirm" action={props.onComplete}>Complete</Button>
        </>}
      </div>
    </div>
  );
};

export default Status;
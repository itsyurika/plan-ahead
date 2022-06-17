import Button from 'components/Button';
import 'components/styles/Assignment.scss';

const Status = (props) => {
  return (
    <div className='status-form' >
      {props.status === 'Not started' && <Button style="confirm" action={props.onStart}>Start</Button>}
      {props.status === 'Complete' && <Button style="warning" action={props.onCancelComplete}>Cancel Submission</Button>}
      {props.status === 'Started' && <>
        <Button style="warning" action={props.onCancelStarted}>Undo Started</Button>
        <Button style="confirm" action={props.onComplete}>Complete</Button>
      </>}
    </div>
  );
};

export default Status;
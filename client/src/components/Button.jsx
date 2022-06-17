import 'components/styles/Button.scss';

const Button = (props) => {
  return (
    <button
      className={`button button--${props.style}`}
      onClick={props.action}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
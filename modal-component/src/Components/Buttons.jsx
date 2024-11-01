import PropTypes from "prop-types";

function Button({ buttonText, className, onClick }) {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}
export default Button;

Button.propTypes = {
  buttonText: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

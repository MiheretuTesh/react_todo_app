import PropTypes from "prop-types";

const Button = ({ color, text, textColor, onClick }) => {
  return (
    <div>
      <button
        className="btn"
        style={{ color: textColor, backgroundColor: color }}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;

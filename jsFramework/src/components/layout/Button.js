import React from "react";
import PropTypes from "prop-types";

// Adding PropTypes to the Button
function Button({ text }) {
	return <button>{text}</button>;
}

Button.propTypes = {
	text: PropTypes.node.isRequired
};

export default Button;
  

import React from "react";
import PropTypes from "prop-types";

// Adding PropTypes to the Button
function Button({ children }) {
	return <button>{children}</button>;
}

Button.propTypes = {
	children: PropTypes.node.isRequired
};

export default Button;
  

import React from "react";
import PropTypes from "prop-types";

function Heading({ title }) {
    return <h1>{title}</h1>;
}

Heading.propTypes = {
	title: PropTypes.string
	// We can add an isRequired property after the value type so that we'll receive a warning if we don't supply a value for it:
};

export default Heading;
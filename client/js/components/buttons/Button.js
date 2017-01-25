import React from 'react';

const propTypes = {
	className: React.PropTypes.string,
	buttonText: React.PropTypes.string,
	onClick: React.PropTypes.func
};

const Button = (props) => (
	<button
		type="button"
		className={`${props.className} btn`}
		onClick={props.onClick}>
		{props.buttonText}
	</button>
);

Button.propTypes = propTypes;
export default Button;

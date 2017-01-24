import React from 'react';

const Button = (props) => (
	<button
		type="button"
		className={`${props.pclassName} btn`}
		onClick={props.onClick}>
		{props.buttonText}
	</button>
)

export default Button;

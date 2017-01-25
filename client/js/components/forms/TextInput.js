import React from 'react';

const propTypes = {
	type: React.PropTypes.string,
	name: React.PropTypes.string,
	fieldType: React.PropTypes.string,
	placeholder: React.PropTypes.string,
	onChange: React.PropTypes.func
};

const Input = (props) => (
	<input
		type={props.type}
		name={props.name}
		placeholder={props.placeholder}
		onChange={(evt) => props.onChange(evt, props.fieldType)}
	/>
);

Input.propTypes = propTypes;
export default Input;

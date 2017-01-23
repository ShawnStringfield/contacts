import React from 'react';

function onChange(props, evt) {
	props.onChange(evt, props);
}

const Input = (props) => (
	<input
		type={props.type}
		name={props.name}
		placeholder={props.placeholder}
		onChange={onChange.bind(this, props)}
	/>
)

export default Input;

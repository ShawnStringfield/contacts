import React from 'react';
import Select from '../forms/Select';
import Input from '../forms/TextInput';

const propTypes = {
	id: React.PropTypes.string,
	onClick: React.PropTypes.func,
	onChange: React.PropTypes.func
};

function onClick(props) {
	props.onClick(props);
}

function handleListInput(input) {
	console.log( input );
}

const InputWithSelect = (props) => (
	<label htmlFor={props.type}>
		<span
			className="label"
			onClick={onClick.bind(this, props)}>
			Home
		</span>
		<Input
			type="text"
			name={props.id}
			placeholder="Phone"
			onChange={props.handlePhoneItem}
		/>
		<Select
			list={['Work', 'Home', 'Mobile']}
			onClick={handleListInput}
		/>
	</label>
);

InputWithSelect.propTypes = propTypes;
export default InputWithSelect;

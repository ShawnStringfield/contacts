import React, {Component} from 'react';
import InputWithSelect from '../forms/InputWithSelect';

class AddInputs extends Component{

	constructor(props) {
		super(props);

		this.state = {
			addressess: []
		};
	}

	// onPhoneChange(evt, props) {
	// 	const key = evt.target.name;
	// 	const value = evt.target.value;
	// 	console.log( props );
	// 	console.log( key );
	// 	console.log( value );
	// 	// props.handlePhoneItem(key, value);
	// }

	handleSelectOptions(props) {
		console.log( props );
		props.handleOverlay();
		// props.handleSelectOptions(item, key);
	}

	showPickList(props) {
		props.handleOverlay();
	}

	getFormField(props, key) {
		return (
			<InputWithSelect
				key={key}
				id={key}
				type={this.props.type}
				onClick={this.showPickList}
				onChange={props.handlePhoneItem}
				{...props}
			/>
		)
	}

	createNewInput(props) {
		let count = this.state.addressess.length + 1;
		let key = `phone-${count}`;
		const field = this.getFormField(props, key);

		this.setState((prevState) => ({
			addressess: [...prevState.addressess, field]
		}));

		props.handleFormItem(key);
	}

	renderNewInput() {
		return this.state.addressess.map((address) => {
			return <label key={address.key} htmlFor="Phone">{address}</label>;
		});
	}

	render(){
		return(
			<div>
				{/* {this.renderSelect(this.props)} */}
				{this.renderNewInput(this.props)}
				<button
					type="button"
					className="add"
					onClick={this.createNewInput.bind(this, this.props)}>
					+ Add Phone
				</button>
			</div>
		);
	}
}

AddInputs.propTypes = {
	showOptions: React.PropTypes.bool
};

export default AddInputs;

import React, {Component} from 'react';
import InputWithSelectSheet from '../forms/InputWithSelectSheet';

class MultiFieldSelectSheetCombo extends Component{

	constructor(props) {
		super(props);

		this.state = {
			addressess: []
		};
	}

	componentWillReceiveProps() {
		console.log( this.props );
	}

	handleSelectOptions(props) {
		props.handleOverlay();
		// props.handleSelectOptions(item, key);
	}

	getFormField(props, key) {
		return (
			<InputWithSelectSheet
				key={key}
				id={key}
				type={this.props.type}
				onClick={props.onClick}
				onChange={props.onChange}
			/>
		);
	}

	createNewInput(props) {
		let count = this.state.addressess.length + 1;
		let key = `phone-${count}`;
		const field = this.getFormField(props, key);

		this.setState((prevState) => ({
			addressess: [...prevState.addressess, field]
		}));

		props.setupFieldCreation(key);
	}

	renderNewInput() {
		return this.state.addressess.map((address) => {
			return <label key={address.key} htmlFor="Phone">{address}</label>;
		});
	}

	render(){
		return(
			<div>
				{this.renderNewInput(this.props)}
				<button
					type="button"
					className="add"
					onClick={() => this.createNewInput(this.props)}>
					+ Add Phone
				</button>
			</div>
		);
	}
}

MultiFieldSelectSheetCombo.propTypes = {
	showOptions: React.PropTypes.bool,
	type: React.PropTypes.string
};

export default MultiFieldSelectSheetCombo;

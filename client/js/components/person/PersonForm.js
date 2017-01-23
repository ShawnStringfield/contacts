import React, {Component} from 'react';
import AddInputs from '../forms/AddInputs';
import Overlay from '../common/Overlay';

class PersonForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showOptions: false,
			person: {
				phones: {}
			},
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.handleOverlay = this.handleOverlay.bind(this);
		this.handleSelectOptions = this.handleSelectOptions.bind(this);
		this.handleFormItem = this.handleFormItem.bind(this);
		this.handlePhoneItem = this.handlePhoneItem.bind(this);
	}

	onSubmit(evt) {
		this.props.onSubmit(this.state.person);
		evt.preventDefault();
	}

	onChange(evt) {
		const person = this.state.person;
		person[evt.target.name] = evt.target.value;
		this.setState({person});
	}

	handleSelectOptions(item, key) {
		const person = this.state.person;
		person.phones[key]['type'] = item;
	}

	handlePhoneItem(evt, item) {
		const person = this.state.person;
		const key = item.name;
		const value = evt.target.value;
		person.phones[key]['value'] = value;
		console.log( person );
	}

	handleFormItem(key) {
		const person = this.state.person;
		person.phones[key] = {};
	}

	handleOverlay() {
		this.setState({showOptions: !this.state.showOptions});
	}

	render() {
		const person = this.state.person;
		return(
			<div className="form container">
				<h2>New Contact</h2>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<input
							type="text"
							name="first_name"
							value={person.first}
							placeholder="First Name"
							onChange={this.onChange}
						/>

						<input
							type="text"
							name="last_name"
							value={person.last}
							placeholder="Last Name"
							onChange={this.onChange}
						/>
					</div>

					<input
						type="text"
						name="email"
						value={person.email}
						placeholder="Email"
						onChange={this.onChange}
					/>

					<input
						type="text"
						name="job_title"
						value={person.job_title}
						placeholder="Job Title"
						onChange={this.onChange}
					/>

					<AddInputs
						type="phone"
						showOptions={this.state.showOptions}
						handleOverlay={this.handleOverlay}
						handleFormItem={this.handleFormItem}
						handlePhoneItem={this.handlePhoneItem}
						handleSelectOptions={this.handleSelectOptions}
					/>

					{/* <div style={{marginTop:'20px'}}>
						<button type="submit" className="btn">Done</button>
					</div> */}
				</form>

				<Overlay
					onClick={this.handleOverlay}
					className={this.state.showOptions ? 'active':'inactive'}
				/>
			</div>
		);
	}
}

PersonForm.propTypes = {
	onSubmit: React.PropTypes.func
};

export default PersonForm;

import React, {Component} from 'react';
import MultiFieldSelectSheetCombo from '../forms/MultiFieldSelectSheetCombo';

class PersonForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showOverlay: false,
			person: {
				phone: {},
				email: {},
			},
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.setFieldType = this.setFieldType.bind(this);
		this.setupFieldCreation = this.setupFieldCreation.bind(this);
		this.handleNewFieldInput = this.handleNewFieldInput.bind(this);

		this.overlayOptions = {
			state: this.state.showOverlay,
			action: this.handleOverlay
		};
	}

	onSubmit(evt) {
		evt.preventDefault();
		this.props.save(this.state.person);
	}

	onChange(evt) {
		const person = this.state.person;
		person[evt.target.name] = evt.target.value;
		this.setState({person});
	}

	setFieldType(args) {
		const person = this.state.person;
		const {type, id, name} = args;
		person[type][id]['type'] = name;
	}

	handleNewFieldInput(evt, type) {
		const key = evt.target.name;
		const value = evt.target.value;
		const person = this.state.person;
		person[type][key]['value'] = value;
	}

	setupFieldCreation(field) {
		console.log( field );
		const person = this.state.person;
		const type = field.type;
		const key = field.key;
		person[type][key] = {};
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

					<MultiFieldSelectSheetCombo
						type="phone"
						setupFieldCreation={this.setupFieldCreation}
						onClick={this.setFieldType}
						onChange={this.handleNewFieldInput}
					/>

					<div style={{marginTop:'20px'}}>
						<button type="submit" className="btn">Done</button>
					</div>
				</form>
			</div>
		);
	}
}

PersonForm.propTypes = {
	onSubmit: React.PropTypes.func
};

export default PersonForm;

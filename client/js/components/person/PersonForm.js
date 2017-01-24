import React, {Component} from 'react';
import MultiFieldSelectSheetCombo from '../forms/MultiFieldSelectSheetCombo';
import Overlay from '../common/Overlay';

class PersonForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showOverlay: false,
			person: {
				phones: {}
			},
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.handleSelectOption = this.handleSelectOption.bind(this);
		this.setupFieldCreation = this.setupFieldCreation.bind(this);
		this.handleNewFieldInput = this.handleNewFieldInput.bind(this);
		this.handleOverlay = this.handleOverlay.bind(this);

		this.overlayOptions = {
			state: this.state.showOverlay,
			action: this.handleOverlay
		};
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

	handleOverlay() {
		this.setState({
			showOverlay: !this.state.showOverlay
		});
	}

	handleSelectOption(key, item) {
		const person = this.state.person;
		person.phones[key]['type'] = item;
		console.log( person );
	}

	handleNewFieldInput(evt) {
		const key = evt.target.name;
		const value = evt.target.value;
		const person = this.state.person;
		person.phones[key]['value'] = value;
		/* eslint-disable no-console */
		console.log( person );
	}

	setupFieldCreation(key) {
		const person = this.state.person;
		person.phones[key] = {};
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
						onClick={this.handleSelectOption}
						onChange={this.handleNewFieldInput}
					/>

					{/* <div style={{marginTop:'20px'}}>
						<button type="submit" className="btn">Done</button>
					</div> */}
				</form>

				<Overlay
					onClick={this.handleOverlay}
					className={this.state.showOverlay ? 'active':'inactive'}
				/>
			</div>
		);
	}
}

PersonForm.propTypes = {
	onSubmit: React.PropTypes.func
};

export default PersonForm;

import React, {Component} from 'react';

class PersonForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			person: {
				first_name: '',
				last_name: '',
				email: ''
			},
		};

		this.onChange = this.onChange.bind(this);
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

	render() {
		return(
			<div className="form container">
				<h2>New Contact</h2>
				<form onSubmit={this.onSubmit.bind(this)}>
					<div className="form-group">
						<input
							type="text"
							name="first_name"
							value={this.state.person.first}
							placeholder="First Name"
							onChange={this.onChange}
						/>

						<input
							type="text"
							name="last_name"
							value={this.state.person.last}
							placeholder="Last Name"
							onChange={this.onChange}
						/>
					</div>

					<input
						type="text"
						name="email"
						value={this.state.person.email}
						placeholder="Email"
						onChange={this.onChange}
					/>

					<button className="btn">Done</button>
				</form>
			</div>
		);
	}
}

PersonForm.propTypes = {
	onSubmit: React.PropTypes.func
};

export default PersonForm;

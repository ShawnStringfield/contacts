import React, {Component} from 'react';
import {Link} from 'react-router';

const getFullName = function(name) {
	return `${name.first} ${name.last}`;
};

class Contacts extends Component{

	static propTypes = {
		contacts: React.PropTypes.array
	}

	constructor(props) {
		super(props);
	}

	getAllContacts(contact) {
		return(
			<div className="contact" key={contact.uid}>
				<Link to={`/contact/${contact.uid}`}>
					{getFullName(contact.name)}
				</Link>
			</div>
		);
	}

	showContactForm() {
		this.context.router.transitionTo('new-contact');
	}

	render() {
		return (
			<div>
				<div className="toolbar toolbar-home">
					<div className="container">
						<h3>Contacts</h3>
						<div className="add" onClick={this.showContactForm.bind(this)}/>
					</div>
				</div>
				<div className="contacts container">
					{this.props.contacts.map(this.getAllContacts)}
				</div>
			</div>
		);
	}
}

Contacts.contextTypes = {
	router: React.PropTypes.object
};

export default Contacts;

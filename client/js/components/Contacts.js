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
			<div className="contact" key={contact.name.first}>
				<Link to={`/${contact.uid}`}>
					{getFullName(contact.name)}
				</Link>
			</div>
		);
	}

	render() {
		return (
			<div className="contacts container">
				<h2>Contacts</h2>
				{this.props.contacts.map(this.getAllContacts)}
			</div>
		);
	}
}

export default Contacts;

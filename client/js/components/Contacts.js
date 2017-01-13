import React, {Component} from 'react';
import {Link} from 'react-router';

const getFullName = function(name) {
	return `${name.first} ${name.last}`;
};

class Contacts extends Component{
	static propTypes = {
			contacts: React.PropTypes.array
	}

	getAllContacts(contact) {
		return(
			<div className="contact" key={contact.uid}>
				<Link to={`/${contact.uid}`}>
					{getFullName(contact.name)}
				</Link>
			</div>
		);
	}

	render() {
		return (
			<div className="contacts container">
				{this.props.contacts.map(this.getAllContacts)}
			</div>
		);
	}
}

export default Contacts;

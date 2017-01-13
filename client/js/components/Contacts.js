import React, {Component} from 'react';
// import {Link} from 'react-router';
//
// const getFullName = function(name) {
// 	return `${name.first} ${name.last}`;
// };

class Contacts extends Component{

	static propTypes = {
			contacts: React.PropTypes.array
	}

	// getAllContacts(contact) {
	// 	return(
	// 		<div className="contact" key={contact.uid}>
	// 			<div>
	// 				<Link to={`/contact/${contact.uid}`}>
	// 					{getFullName(contact.name)}
	// 				</Link>
	// 			</div>
	// 		</div>
	// 	);
	// }

	render() {
		console.log( this );
		return (
			<div className="contacts">
				sd
				{/* {this.props.contacts.map(this.getAllContacts)} */}
			</div>
		);
	}
}

export default Contacts;

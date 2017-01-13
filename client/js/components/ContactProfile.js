import React from 'react';

class ContactProfile extends React.Component{
	render() {
		const {name, address, email, avatar, phone} = this.props.contact;
		return(
			<div className="container">
				<p>{name.first} {name.last}</p>
				<p>{phone}</p>
				<p>{email}</p>
				<p>{address.street}</p>
				<p>{address.city} {address.state} {address.zip}</p>
				<p><img src={avatar} alt=""/></p>
			</div>
		)
	}
}

export default ContactProfile;

import React from 'react';

class ContactProfile extends React.Component{
	render() {
		return(<h1>{this.props.params.uid}</h1>);
	}
}

export default ContactProfile;

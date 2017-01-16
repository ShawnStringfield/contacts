import React, { Component } from 'react';
import { BrowserRouter as Router, Match } from 'react-router';
import _ from 'lodash';

import contacts from './resources/contact_api';
import Contacts from './components/Contacts';
import Profile from './components/ContactProfile';
import '../sass/styles.scss';

class App extends Component{

	constructor(props) {
		super(props);
		this.state = {
			contacts: []
		};
	}

	componentDidMount() {
		contacts.getAllContacts().then(response => {
			localStorage.setItem('contacts', JSON.stringify(response));
			this.setState({contacts: response});
		});
	}

	handleContactListRoute() {
		return <Contacts contacts={this.state.contacts}/>;
	}

	handleContactRoute({...props}) {
		const contacts = JSON.parse(localStorage.getItem('contacts'));
		const contact = _.find(contacts, {uid: props.params.uid});
		return <Profile contact={contact} {...props}/>;
	}

	render() {
		return(
			<Router>
				<div>
					<Match exactly pattern="/" render={this.handleContactListRoute.bind(this)}/>
					<Match pattern="/contacts/:uid" render={this.handleContactRoute.bind(this)}/>
				</div>
			</Router>
		);
	}
}

export default App;

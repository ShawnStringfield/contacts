import React, { Component } from 'react';
import { BrowserRouter as Router, Match } from 'react-router';
import _ from 'lodash';

import storage from './helpers/storage';
import contacts_api from './resources/contacts';
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
		storage.set('contacts', contacts_api);
		this.setState({contacts: storage.get('contacts')});
	}

	handleContactListRoute() {
		return <Contacts contacts={this.state.contacts}/>;
	}

	handleContactRoute({...props}) {
		const contacts = storage.get('contacts');
		const contact = _.find(contacts, {uid: props.params.uid});
		return <Profile contact={contact} {...props}/>;
	}

	render() {
		return(
			<Router>
				<div>
					<Match exactly pattern="/" render={this.handleContactListRoute.bind(this)}/>
					<Match pattern="/:uid" render={this.handleContactRoute.bind(this)}/>
				</div>
			</Router>
		);
	}
}

export default App;

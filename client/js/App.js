import React, { Component } from 'react';
import { BrowserRouter as Router, Match } from 'react-router';
import _ from 'lodash';

import storage from './helpers/storage';
import contacts_api from './resources/contacts';
import Contacts from './components/Contacts';
import Profile from './components/person/ContactProfile';
import PersonForm from './components/person/PersonForm';

import '../sass/styles.scss';

class App extends Component{

	constructor(props) {
		super(props);

		this.state = {
			contacts: []
		};

		this.handleContactListRoute = this.handleContactListRoute.bind(this);
		this.handleContactRoute = this.handleContactRoute.bind(this);
		this.save = this.save.bind(this);
	}

	componentDidMount() {
		const localContacts = storage.get('contacts');
		if (!localContacts) {
			storage.set('contacts', contacts_api);
		}

		this.setState({contacts: localContacts});
	}

	save(contact) {
		console.log( contact );
		const last_contact = _.last(this.state.contacts);

		const person = {
			uid: Number(last_contact.uid) + 1 + '',
			phone: contact.phone,
			email: contact.email,
			name: {
				first: contact.first_name,
				last: contact.last_name
			}
		};

		const contacts = [...this.state.contacts, person];
		// storage.set('contacts', contacts);
		this.setState({contacts});
	}

	handleContactListRoute() {
		return <Contacts contacts={this.state.contacts}/>;
	}

	handleContactRoute({...props}) {
		const contacts = storage.get('contacts');
		const contact = _.find(contacts, {uid: props.params.uid});
		Object.assign({}, contact);

		return(
			<Profile
				name={`${contact.name.first} ${contact.name.last}`}
				job_title={contact.job_title}
				email={contact.email}
				phone={contact.phone}
				avatar_url={contact.avatar}
				address={contact.address}
				company={contact.company}
				notes={contact.notes}
			/>
		);
	}

	render() {
		/* eslint-disable no-console */
		console.table( this.state.contacts );

		return(
			<Router>
				<div>
					<Match exactly pattern="/" render={this.handleContactListRoute}/>
					<Match pattern="/new-contact" render={() => <PersonForm save={this.save}/>}/>
					<Match pattern="/contact/:uid" render={this.handleContactRoute}/>
				</div>
			</Router>
		);
	}
}

export default App;

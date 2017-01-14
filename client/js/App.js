import React, { Component } from 'react';
import { BrowserRouter as Router, Match } from 'react-router';
import _ from 'lodash';

import contacts from './resources/contact_api';
import Contacts from './components/Contacts';
import Profile from './components/ContactProfile';
import '../sass/styles.scss';

/* Can Programmatically Set Routes
const ContactComp = ({component:Component, contacts, ...props}) => (
	<Match {...props} render={(props) => (
		<Component {...props} contacts={contacts}/>
	)}/>
)
*/

class App extends Component{
	constructor() {
		super();
		this.state = {
			contacts: []
		};
	}

	componentDidMount() {
		contacts.getAllContacts().then(response => {
			this.setState({contacts: response});
		});
	}

	handleContactListRoute() {
		return <Contacts contacts={this.state.contacts}/>;
	}

	handleContactRoute(props) {
		const person = _.find(this.state.contacts, {uid: props.params.uid});
		return <Profile contact={person} {...props} />;
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

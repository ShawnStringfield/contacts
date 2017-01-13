import React, { Component } from 'react';
import { BrowserRouter as Router, Match, Miss, Link } from 'react-router';
import resource from './resources/contact_api';
// import Contacts from './components/Contacts';
// import Profile from './components/ContactProfile';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';

import '../sass/styles.scss';

class App extends Component{
	constructor() {
		super();
		this.state = {
			contacts: []
		};
	}

	componentDidMount() {
		resource.getAllContacts().then(response => {
			this.setState({contacts: response});
		});
	}

	render() {
		return(
			<Router>
				<div className="container">
					<h1>Contacts</h1>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/sdfsdf">Miss</Link></li>
					</ul>

					<Match exactly pattern="/" component={Home}/>
					<Match pattern="/about" component={About}/>
					<Miss component={NoMatch}/>
				</div>
			</Router>
		);
	}
}

export default App;

import React from 'react';
import {Link} from 'react-router';

import Map from './Map';
import Avatar from './Avatar';

class ContactProfile extends React.Component{

	static propTypes = {
		contact: React.PropTypes.object,
		params: React.PropTypes.object
	}

	constructor(props) {
		super(props);
	}

	getNotes(note) {
		return(
			<div className="note" key={note.time}>
				<p>
					{note.text}
					<span className="time">{note.time}</span>
				</p>
				<hr/>
			</div>
		);
	}

	render() {
		return(
			<div className="contact-profile">

				<div className="toolbar">
					<Link to="/">Contacts</Link>
				</div>

				<div className="profile-header">
					<div className="profile-name">
						<div>{this.props.name}</div>
						<div>{this.props.job_title}</div>
					</div>
					<Avatar url={this.props.avatar_url}/>
				</div>

				<Map lat={this.props.address.lat} long={this.props.address.long} zoom="13" width="700" height="150"/>

				<div className="profile-employer">
					<h3>Works For</h3>
					<div>{this.props.company.name}</div>
				</div>

				<div className="block">
					<div className="group">
						<div className="label">Work</div>
						<div className="phone">{this.props.phone}</div>
					</div>

					<div className="group">
						<div className="label">Email</div>
						<div className="email">{this.props.email}</div>
					</div>

					<div className="group">
						<div className="label">Address</div>
						<div className="address">
							<div>{this.props.address.street}</div>
							<div>{this.props.address.city} {this.props.address.state} {this.props.address.zip}</div>
						</div>
					</div>

					<hr/>

					<div className="notes">
						<h3>Notes</h3>
						{this.props.notes.map(this.getNotes)}
					</div>
				</div>
			</div>
		);
	}
}

ContactProfile.propTypes = {
	name: React.PropTypes.string,
	email: React.PropTypes.string,
	phone: React.PropTypes.string,
	job_title: React.PropTypes.string,
	avatar_url: React.PropTypes.string,
	address: React.PropTypes.object,
	company: React.PropTypes.object,
	notes: React.PropTypes.array
};

export default ContactProfile;

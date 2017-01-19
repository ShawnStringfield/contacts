import React from 'react';
import {Link} from 'react-router';

import Map from './Map';

class ContactProfile extends React.Component{

	static propTypes = {
		contact: React.PropTypes.object,
		params: React.PropTypes.object
	}

	constructor(props) {
		super(props);
		this.state = {
			contact: {}
		};
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

		const {
			name,
			address,
			company,
			email,
			avatar,
			phone,
			job_title,
			notes
		} = this.props.contact;

		const lat = '38.93283';
		const long = '-76.97831599999999';

		return(

			<div className="contact-profile">

				<div className="toolbar">
					<Link to="/">Contacts</Link>
				</div>

				<div className="profile-header">
					<div className="profile-name">
						<div>{name.first} {name.last}</div>
						<div>{job_title}</div>
					</div>
					<div className="profile-avatar">
						<img className="avatar" src={avatar} alt=""/>
					</div>
				</div>

				<Map lat={lat} long={long} zoom="13" width="700" height="150"/>

				<div className="block">
					<div className="group">
						<div className="label">Work</div>
						<div className="phone">{phone}</div>
					</div>

					<div className="group">
						<div className="label">Email</div>
						<div className="email">{email}</div>
					</div>

					<div className="group">
						<div className="label">Address</div>
						<div className="address">
							<div>{address.street}</div>
							<div>{address.city} {address.state} {address.zip}</div>
						</div>
					</div>

					<hr/>

					<div className="group">
						<h3>Employment</h3>
						<div>{company.name}</div>
						<div>{company.phone}</div>
						<div>{company.website}</div>
						<div>{company.address.street}</div>
						<div>{company.address.city} {company.address.state} {company.address.zip}</div>
					</div>

					<hr/>

					<div className="notes">
						<h3>Notes</h3>
						{notes.map(this.getNotes)}
					</div>
				</div>
			</div>
		);
	}
}

export default ContactProfile;

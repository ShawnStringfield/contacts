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
		const {
				name,
				email,
				phone,
				job_title,
				avatar_url,
				address,
				company,
				notes
		} = this.props;

		return(
			<div className="contact-profile">

				<div className="toolbar">
					<Link to="/">Contacts</Link>
				</div>

				<div className="profile-header">
					<div className="profile-name">
						{name && <div>{name}</div>}
						{job_title && <div>{job_title}</div>}
					</div>
					{avatar_url && <Avatar url={avatar_url}/>}
				</div>

				{address &&
					<Map
						lat={address.lat}
						long={address.long}
						zoom="13"
						width="700"
						height="150"
					/>
				}

				{company &&
					<div className="profile-employer">
						<h3>Works For</h3>
						<div>{company.name}</div>
					</div>
				}

				<div className="block">
					{phone &&
						<div className="group">
							<div className="label">Work</div>
							<div className="phone">{JSON.stringify(phone, null, 4)}</div>
						</div>
					}

					{email &&
						<div className="group">
							<div className="label">Email</div>
							<div className="email">{email}</div>
						</div>
					}

					{address &&
						<div className="group">
							<div className="label">Address</div>
							<div className="address">
								<div>{address.street}</div>
								<div>{address.city} {address.state} {address.zip}</div>
							</div>
						</div>
					}

					<hr/>

					{notes &&
						<div className="notes">
							<h3>Notes</h3>
							{notes.map(this.getNotes)}
						</div>
					}
				</div>
			</div>
		);
	}
}

ContactProfile.propTypes = {
	name: React.PropTypes.string,
	email: React.PropTypes.string,
	phone: React.PropTypes.object,
	job_title: React.PropTypes.string,
	avatar_url: React.PropTypes.string,
	address: React.PropTypes.object,
	company: React.PropTypes.object,
	notes: React.PropTypes.array
};

export default ContactProfile;

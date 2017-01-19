import React from 'react';

const Avatar = (props) => (
	<div className="profile-avatar">
		<img className="avatar" src={props.url}/>
	</div>
)

export default Avatar;

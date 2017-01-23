import React from 'react';

const Overlay = function(props) {
	return(
		<div
			onClick={props.onClick}
			className={`${props.className} overlay`}
		/>
	);
};

Overlay.propTypes = {
	className: React.PropTypes.string,
	onClick: React.PropTypes.func
};

export default Overlay;

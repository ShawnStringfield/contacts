import React from 'react';

const propTypes = {
	fields: React.PropTypes.array
};

const MultiFieldsList = (props) => (
	<div>
		{props.fields.map((field) => {
			return <div key={field.key}>{field}</div>;
		})}
	</div>
);

MultiFieldsList.propTypes = propTypes;
export default MultiFieldsList;

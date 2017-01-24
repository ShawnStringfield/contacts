import React from 'react';

const MultiFieldsList = (props) => (
	<div>
		{props.fields.map((field) => {
			return <div key={field.key}>{field}</div>
		})}
	</div>
);

export default MultiFieldsList;

import React from 'react';

function renderList(props) {
	return props.list.map((item) => {
		return(
			<li
				onClick={() => props.onClick(item)}
				key={item}>{item}
			</li>
		);
	});
}

const Select = (props) => (
	<div className="select">
		<ul>{renderList(props)}</ul>
	</div>
);

export default Select;

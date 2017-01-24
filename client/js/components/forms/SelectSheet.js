import React from 'react';

const propTypes = {
	className: React.PropTypes.string
};

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

const SelectSheet = (props) => (
	<div className={`${props.className} select`}>
		<ul>{renderList(props)}</ul>
	</div>
);

SelectSheet.propTypes = propTypes;
export default SelectSheet;

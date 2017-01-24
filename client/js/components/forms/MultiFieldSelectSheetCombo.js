import React, {Component} from 'react';
import InputWithSelectSheet from '../forms/InputWithSelectSheet';
import MultiFieldsList from '../forms/MultiFieldsList';
import Button from '../buttons/Button';

class MultiFieldSelectSheetCombo extends Component{

	constructor(props) {
		super(props);

		this.state = {
			fields: []
		};
	}

	getFormField(props, key) {
		return (
			<InputWithSelectSheet
				key={key}
				id={key}
				type={this.props.type}
				onClick={props.onClick}
				onChange={props.onChange}
			/>
		);
	}

	createNewInput(props) {
		let count = this.state.fields.length + 1;
		let key = `${props.type}-${count}`;
		const field = this.getFormField(props, key);

		this.setState((prevState) => ({
			fields: [...prevState.fields, field]
		}));

		props.setupFieldCreation({key:key, type:props.type});
	}

	render(){
		return(
			<div>
				<MultiFieldsList fields={this.state.fields} />
				<Button
					type="button"
					className="add"
					buttonText={`+ Add ${this.props.type}`}
					onClick={this.createNewInput.bind(this, this.props)}
				/>
			</div>
		);
	}
}

MultiFieldSelectSheetCombo.propTypes = {
	showOptions: React.PropTypes.bool,
	type: React.PropTypes.string
};

export default MultiFieldSelectSheetCombo;

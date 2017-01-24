import React, {Component} from 'react';
import InputWithSelectSheet from '../forms/InputWithSelectSheet';

class MultiFieldSelectSheetCombo extends Component{

	constructor(props) {
		super(props);

		this.state = {
			addressess: []
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
		let count = this.state.addressess.length + 1;
		let key = `${props.type}-${count}`;
		const field = this.getFormField(props, key);

		this.setState((prevState) => ({
			addressess: [...prevState.addressess, field]
		}));

		props.setupFieldCreation({key:key, type:props.type});
	}

	renderNewInput() {
		return this.state.addressess.map((address) => {
			return <div key={address.key}>{address}</div>
		});
	}

	render(){
		return(
			<div>
				{this.renderNewInput(this.props)}
				<button
					type="button"
					className="add"
					onClick={() => this.createNewInput(this.props)}>
					+ Add {this.props.type}
				</button>
			</div>
		);
	}
}

MultiFieldSelectSheetCombo.propTypes = {
	showOptions: React.PropTypes.bool,
	type: React.PropTypes.string
};

export default MultiFieldSelectSheetCombo;

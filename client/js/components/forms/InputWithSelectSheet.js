import React, {Component} from 'react';
import SelectSheet from '../forms/SelectSheet';
import Input from '../forms/TextInput';
import Overlay from '../common/Overlay';

const propTypes = {
	id: React.PropTypes.string,
	type: React.PropTypes.string,
	onClick: React.PropTypes.func,
	onChange: React.PropTypes.func
};

class InputWithSelectSheet extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showSelectOptions: false,
			inputType: null
		};

		this.handleListOptions = this.handleListOptions.bind(this);
		this.toggleSelectOptions = this.toggleSelectOptions.bind(this);
	}

	handleListOptions(name) {
		const args = {
			id: this.props.id,
			type: this.props.type,
			name: name
		};

		this.setState({inputType: name});
		this.props.onClick(args);
		this.toggleSelectOptions();
	}

	toggleSelectOptions() {
		this.setState({
			showSelectOptions: !this.state.showSelectOptions
		});
	}

	render() {
		return(
			<label htmlFor={this.props.type}>
				{this.props.state}
				<span className="label" onClick={this.toggleSelectOptions}>
					{this.state.inputType || 'Home'}
				</span>
				<Input
					type="text"
					fieldType={this.props.type}
					name={this.props.id}
					placeholder={this.props.type}
					onChange={this.props.onChange}
				/>
				<SelectSheet
					list={['Work', 'Home', 'Mobile']}
					onClick={this.handleListOptions}
					className={this.state.showSelectOptions ? 'active':'inactive'}
				/>
				<Overlay
					onClick={this.toggleSelectOptions}
					className={this.state.showSelectOptions ? 'active':'inactive'}
				/>
			</label>
		);
	}
}

InputWithSelectSheet.propTypes = propTypes;
export default InputWithSelectSheet;

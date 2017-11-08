import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import actions from '../actions/actions.js';
let _this;
class PeopleComponent extends React.Component {
	constructor(){
		super();
		_this=this;
		this.state={};
	}
	componentDidMount(){
			this.store = this._reactInternalInstance._context.store;
	}
	handleClick(e){
		_this.store.dispatch(actions.hideDialog(null))
	}
	render(){
		return(
			<div className={this.props.peopleDetails?'body-mask':'hide'} onKeyUp={this.handleKeyEvent} ref="dialogModal">
					<div className="col-md-offset-4 col-lg-offset-4">
						<div className="col-md-7 col-lg-7">
							<div className="row people-modal-dialog">
								<button className="btn btn-primary pull-right" onClick={this.handleClick.bind(this)}>x</button>
								<p>Name: {this.props.peopleDetails?this.props.peopleDetails.name:''}</p>
								<p>Diameter: {this.props.peopleDetails?this.props.peopleDetails.diameter:''}</p>
								<p>Climate: {this.props.peopleDetails?this.props.peopleDetails.climate:''}</p>
								<p>Population: {this.props.peopleDetails?this.props.peopleDetails.population:''}</p>
							</div>
						</div>
					</div>
			</div>
		)
	}
}
 const mapStateToProps =function (state) {
 	console.log(state.peopleDetails);
	return {
		peopleDetails:state.peopleDetails,

	}
}
 export default connect(mapStateToProps)(PeopleComponent);

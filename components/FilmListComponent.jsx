import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/actions.js';
import FilmContent from './FilmContent';
import classNames from 'classnames';
let _this;
 class FilmListComponent extends React.Component {
 	constructor(){
 		super();
 		_this=this;
 		this.state={};
 		this.state.modalDialogClass=classNames({
 			'hide':true,
 		    'row':true
 		})
 	}
 	displayPersonDetails() {
 		_this.props.dispatch(actions.getPeopleDetails({
			requestType:'get',
			url:this.link
 		}))
 	}
 	handleChange(e){
 		_this.props.dispatch(actions.filterData(e.currentTarget.value))
 	}
 	handleSubFilter(e){
 			_this.props.dispatch(actions.subFilterData(e.currentTarget.value))
 	}
 	handleText(e){
 		_this.props.dispatch(actions.getData(e.currentTarget.value));
 	}
 	render(){
 		return(
 			<div className="row">
					<select className="btn-group" onChange={this.handleChange}>
						<option selected>Filter By</option>
						{this.props.filterOptions.filters.map(function(filterDetails,index){
							return <option key={index}>{filterDetails}</option>
						})}
					</select>
					<select className="btn-group" onChange={this.handleSubFilter}>
						<option selected>Select</option>
						{this.props.subFilterOptions.map(function(subFilterDetails,index){
							return <option key={index}>{subFilterDetails}</option>
						})}
					</select>
			 		<input type="text" onChange={this.handleText} className={this.props.filterName&& this.props.filterName !=='edited' && this.props.subFilterName && this.props.subFilterName !=='created'?'':'hide'}/>
	 		<table className="table table-hover">
	 			<thead>
	 				<tr>
	 					<th>name</th>
	 					<th>height</th>
	 					<th>mass</th>
	 					<th>created</th>
	 					<th>edited</th>
	 					<th>planet(link)</th>
	 				</tr>
	 			</thead>
	 			<tbody>
	 				{this.props.filmList.map(function(peopleObj,index){
	 					return <tr key={index}>
	 						<td>{peopleObj.name}</td>
	 						<td>{peopleObj.height}</td>
	 						<td>{peopleObj.mass}</td>
	 						<td>{peopleObj.created}</td>
	 						<td>{peopleObj.edited}</td>
	 						<td><a href="javascript:void(0);" onClick={_this.displayPersonDetails.bind({link:peopleObj.homeworld})}>click here</a></td>
	 					</tr>
	 				})}
	 			</tbody>
	 		</table>
 			 </div>
 		)
 	}
 	componentDidMount(){
 		this.store = this._reactInternalInstance._context.store;
 	}
 }
 const mapStateToProps =function (state) {
 	console.log(state.filmList);
	return {
		filmList:state.filterList.length?state.filterList:state.filmList,
		filterOptions:state.filterOptions,
		subFilterOptions:state.subFilterOptions?state.subFilterOptions:[],
		filterName:state.filterName,
		subFilterName:state.subFilterName
	}
}
 export default connect(mapStateToProps)(FilmListComponent);

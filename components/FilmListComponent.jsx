import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/actions.js';
import FilmContent from './FilmContent';
let _this;
 class FilmListComponent extends React.Component {
 	constructor(){
 		super();
 		_this=this;
 	}
 	render(){
 		return(
 			<ul className="row film-list">
 				{
 					this.props.filmList.length>0?this.props.filmList.map(function(filmObj,index){
 							return <FilmContent filmObj={filmObj} key={index} />
 					}):'No films'
 				}
 			</ul>
 			
 		)
 	}
 }
 const mapStateToProps =function (state) {
 	
	return {
		filmList:state.filmList
	}
}
 export default connect(mapStateToProps)(FilmListComponent);

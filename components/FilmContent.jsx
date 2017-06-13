import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import actions from '../actions/actions.js';
let _this,gridClass;
class FilmContent extends React.Component {
	constructor(){
		super();
		_this=this;
		this.state={};
		this.state.container =classNames({
			'hide':true,
			'character-box':true
		})
		
	}
	readMore() {
		if(this.state.container.search('hide')===0) {
			this.setState({
					container :classNames({
					'hide':false,
					'character-box':true
					})
				})
			if(this.props.characterList === undefined) {
				this.store.dispatch(actions.getFileCharacterDetails({
					actionType:'character_details',
					requestType:'get',
					data:_this.props.filmObj.characters,
				}))
				
			}
			
		}
		else {
			this.setState({
				container :classNames({
				'hide':true,
				'character-box':true
				})
			})
		}
		

	}
	render(){
		return(
			<li className="col-sm-12 col-md-4 col-lg-4" key={this.props.key}>
				<div className="row">
					<h5><strong>{this.props.filmObj.title}</strong><sub> (Please click on read more to see the characters of this film) </sub></h5>
					{this.props.filmObj.opening_crawl.length>150?<p className="film-break">{this.props.filmObj.opening_crawl} <a href="javascript:void(0)" onClick={this.readMore.bind(this)}>read more</a></p>:<p className="film-desc">{this.props.filmObj.opening_crawl}</p>}
				</div>
				<div className={this.state.container}>
					<h6>Characters in this film</h6>
					{this.props.characterList?this.props.characterList.length>0?

						 <ul>{this.props.characterList.map(function(characterDetails,index){
							 return <li key={index}>{characterDetails.name}</li>
						})}</ul>
						:'No Characters in this Movie':'No Characters in this Movie'}
				</div>
			</li>

		)
	}
	componentDidMount(){
		this.store = this._reactInternalInstance._context.store;
	}
}

 const mapStateToProps =function (state) {
	return {
		characterList:state.characterList
	}
}
 export default connect(mapStateToProps)(FilmContent);
import React from 'react';
import ReactDom from 'react-dom';
import constants from '../constants/constants.js';
import { createStore,combineReducers,applyMiddleware} from 'redux';
import { Provider,connect } from 'react-redux';
import reducer from '../reducer/reducer.js';
import thunk from 'redux-thunk';
import actions from '../actions/actions.js';
import FilmListComponent from './FilmListComponent';
class RootComponent extends React.Component {
	constructor(){
 		super();
 		
 	}
	render(){
		return(
			<div className="col-md-12 col-sm-12">
				<h1>Films</h1>
				<FilmListComponent/>
			</div>
			
		)
	}
	componentDidMount(){
		this.store = this._reactInternalInstance._context.store;
 		this.store.dispatch(actions.getFilmList({
			actionType:'film_list',
			requesturl:constants.filmsList,
			requestType:'get',
			data:null
		}))
	}
}
ReactDom.render(<Provider store={createStore(reducer,{filmList:[]})}><RootComponent/></Provider>,document.getElementById('mainContainer'));
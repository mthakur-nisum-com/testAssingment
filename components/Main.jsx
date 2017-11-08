import React from 'react';
import ReactDom from 'react-dom';
import constants from '../constants/constants.js';
import { createStore,combineReducers,applyMiddleware} from 'redux';
import { Provider,connect } from 'react-redux';
import reducer from '../reducer/reducer.js';
import thunk from 'redux-thunk';
import actions from '../actions/actions.js';
import FilmListComponent from './FilmListComponent';
import PeopleComponent from './PeopleComponent.jsx';
const filterOptions= {
	filters:['name','height','mass','created','edited'],
	filterParamters:[
			{
				filterName:'name',
				filterList:['Equals','Not equal','Starts with','Ends with','Contains','Not contains']
			},
			{
				filterName:'height',
				filterList:['Equals','Not equal','Less than','Less than or equals','Greater than','Greater than or equals']
			},
			{
				filterName:'mass',
				filterList:['Equals','Not equal','Less than','Less than or equals','Greater than','Greater than or equals']
			},
			{
				filterName:'created',
				filterList:['Today', 'Tomorrow', 'Yestarday', 'This Month', 'Next Month', 'Last Month','Next year','Last Year']
			},
			{
				filterName:'edited',
				filterList:['Today', 'Tomorrow', 'Yestarday', 'This Month', 'Next Month', 'Last Month','Next year','Last Year']
			}
		],
	filterName:null,
	subFilterName:null
}
class RootComponent extends React.Component {
	constructor(){
 		super();
 		
 	}
	render(){
		return(
			<div className="col-md-12 col-sm-12">
				<h1>People List</h1>
				<FilmListComponent/>
				<PeopleComponent/>
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
ReactDom.render(<Provider store={createStore(reducer,{filmList:[],peopleDetails:null,filterOptions:filterOptions,filterList:[]})}><RootComponent/></Provider>,document.getElementById('mainContainer'));
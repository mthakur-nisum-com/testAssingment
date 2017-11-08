import $ from 'jquery';
import constants from '../constants/constants.js';
const intialObj = {
    filmList: [],
    filterList: [],
    filterOptions: {
        filters: ['name', 'height', 'mass', 'created', 'edited'],
        filterParamters: [{
                filterName: 'name',
                filterList: ['Equals', 'Not equal', 'Starts with', 'Ends with', 'Contains', 'Not contains']
            },
            {
                filterName: 'height',
                filterList: ['Equals', 'Not equal', 'Less than', 'Less than or equals', 'Greater than', 'Greater than or equals']
            },
            {
                filterName: 'mass',
                filterList: ['Equals', 'Not equal', 'Less than', 'Less than or equals', 'Greater than', 'Greater than or equals']
            },
            {
                filterName: 'created',
                filterList: ['Today', 'Tomorrow', 'Yestarday', 'This Month', 'Next Month', 'Last Month', 'Next year', 'Last Year']
            },
            {
                filterName: 'edited',
                filterList: ['Today', 'Tomorrow', 'Yestarday', 'This Month', 'Next Month', 'Last Month', 'Next year', 'Last Year']
            }
        ]
    },
    filterName: null,
    subFilterName: null

};
export default (state = intialObj, action) => {
    switch (action.type) {
        case 'film_list':
            var filmList = [];
            $.ajax({
                url: action.requesturl,
                type: action.requestType,
                async: false,
                success: function(res) {
                    filmList = res.results;
                }
            })

            state.filmList = filmList;
            return { filmList: filmList, peopleDetails: null, filterOptions: state.filterOptions, filterList: state.filterList.length?state.filterList:[] };
        case 'character_details':
            var characterObjList = [];
            action.data.forEach(function(characterRequestUrl) {
                $.ajax({
                    url: characterRequestUrl,
                    type: action.requestType,
                    async: false,
                    success: function(res) {
                        characterObjList.push(res)
                    }
                })
            })
            state.characterList = characterObjList;
            return { characterList: characterObjList, filmList: state.filmList };
        case 'planet_details':
            var result = null;
            $.ajax({
                url: action.url,
                type: action.requestType,
                async: false,
                success: function(response) {
                    result = response;
                }
            })
            return { peopleDetails: result, filmList: state.filmList, filterOptions: state.filterOptions, filterList: state.filterList.length?state.filterList:[] };
        case 'hide_dialog':
            return { peopleDetails: action.obj, filmList: state.filmList, filterOptions: state.filterOptions, filterList: state.filterList.length?state.filterList:[] };
        case 'filter_data':
            var result = null;
            state.filterName = action.filterType;
            state.filterOptions.filterParamters.map(function(filterParamterObj) {
                if (filterParamterObj.filterName === action.filterType)
                    result = filterParamterObj.filterList
            })
            return { peopleDetails: action.obj, filmList: state.filmList, filterOptions: state.filterOptions, subFilterOptions: result, filterName: state.filterName, subFilterName: null, filterList: [] };
        case 'handle_subfilter':
            state.subFilterName = action.filterType;
            return { peopleDetails: action.obj, filmList: state.filmList, filterOptions: state.filterOptions, subFilterOptions: state.subFilterOptions, filterName: state.filterName, subFilterName: action.filterType, filterList: [] };
        case 'get_data':
            var filterList = [];
            if (action.data) {
                state.filmList.map(function(peopleObj) {
                    switch (state.filterName) {
                        case 'name':
                            switch (state.subFilterName) {
                                case 'Equals':
                                    if (peopleObj.name === action.data) {

                                        filterList.push(peopleObj);
                                    }
                                    break;
                                case 'Not equal':
                                    if (peopleObj.name !== action.data) {
                                        filterList.push(peopleObj);
                                    }

                                    break;
                                case 'Starts with':
                                    if (peopleObj.name.substring(0, 1) === action.data) {
                                        filterList.push(peopleObj);
                                    }
                                    break;
                                case 'Ends with':
                                    if (peopleObj.name.substring(peopleObj.name.length / 2, peopleObj.name.length) === action.data) {
                                        filterList.push(peopleObj);
                                    }
                                    break;
                                case 'Contains':
                                    if (peopleObj.name.search(action.data) >= 0) {
                                        filterList.push(peopleObj);
                                    }
                                    break;
                                case 'Not contains':
                                    if (peopleObj.name.search(action.data) < 0) {
                                        filterList.push(peopleObj);
                                    }
                                    break;
                            }
                            break;
                        case 'height':
                            switch (state.subFilterName) {
                                case 'Not Equal':
                                    if (parseInt(peopleObj['height'],10) !== parseInt(action.data, 10)) {
                                        filterList.push(peopleObj);
                                    }
                                    break;
                                case 'Equals':
                                    if (parseInt(peopleObj['height'],10) === parseInt(action.data, 10)) {
                                        filterList.push(peopleObj);
                                    }
                                    break;
                                case 'Less than':
                                    if (parseInt(peopleObj['height'],10) < parseInt(action.data, 10)) {
                                        filterList.push(peopleObj);
                                    }
                                    break;
                                case 'Less than or equals':
                                    if (parseInt(peopleObj['height'],10) <= parseInt(action.data, 10)) {
                                        filterList.push(peopleObj);
                                    }
                                    break;
                                case 'Greater than':
                                    if (parseInt(peopleObj['height'],10) > parseInt(action.data, 10)) {
                                        filterList.push(peopleObj);
                                    }
                                    break;
                                case 'Greater than or equals':
                                    if (parseInt(peopleObj['height'],10) >= parseInt(action.data, 10)) {
                                        filterList.push(peopleObj);
                                    }
                                    break;

                            }
                            break;
                        case 'mass':
                            switch (state.subFilterName) {
                                case 'Not Equal':
                                    if (parseInt(peopleObj['mass'],10) !== parseInt(action.data, 10)) {
                                        filterList.push(peopleObj);
                                    }
                                    break;
                                case 'Equals':
                                    if (parseInt(peopleObj['mass'],10) === parseInt(action.data, 10)) {
                                        filterList.push(peopleObj);
                                    }
                                    break;
                                case 'Less than':
                                    if (parseInt(peopleObj['mass'],10) < parseInt(action.data, 10)) {
                                        filterList.push(peopleObj);
                                    }
                                    break;
                                case 'Less than or equals':
                                    if (parseInt(peopleObj['mass'],10) <= parseInt(action.data, 10)) {
                                        filterList.push(peopleObj);
                                    }
                                    break;
                                case 'Greater than':
                                    if (parseInt(peopleObj['mass'],10) > parseInt(action.data, 10)) {
                                        filterList.push(peopleObj);
                                    }
                                    break;
                                case 'Greater than or equals':
                                    if (parseInt(peopleObj['mass'],10) >= parseInt(action.data, 10)) {
                                        filterList.push(peopleObj);
                                    }
                                    break;

                            }
                            break;
                        case 'created':
                            var today = new Date();
                            var dd = today.getDate();
                            var mm = today.getMonth() + 1; //January is 0!
                            var yyyy = today.getFullYear();
                            switch (state.subFilterName) {
                                case 'Today':
                                    if (new Date(peopleObj['created']) === today) {
                                        filterList.push(peopleObj);
                                    }
                                    break;
                                case 'Tomorrow':
                                    dd = dd + 1
                                    if (new Date(peopleObj['created']) > new Date(mm + '/' + dd + '/' + yyyy)) {
                                        filterList.push(peopleObj);
                                    }
                                    break;
                                case 'Next Month':
                                    mm = mm + 1;
                                    if (new Date(peopleObj['created']) > new Date(mm + '/' + dd + '/' + yyyy)) {
                                        filterList.push(peopleObj);
                                    }
                                    break;
                                case 'Yestarday':
                                    dd = dd - 1;
                                    if (new Date(peopleObj['created']) < new Date(mm + '/' + dd + '/' + yyyy)) {
                                        filterList.push(peopleObj);
                                    }
                                    break;
                                case 'This Month':
                                    if (new Date(peopleObj['created']) === today) {
                                        filterList.push(peopleObj);
                                    }
                                    break;
                                case 'Last Month':
                                    mm = mm - 1;
                                    if (new Date(peopleObj['created']) < new Date(mm + '/' + dd + '/' + yyyy)) {
                                        filterList.push(peopleObj);
                                    }
                                    break;
                                case 'Next year':
                                    yyyy = yyyy - 1;
                                    if (new Date(peopleObj['created']) < new Date(mm + '/' + dd + '/' + yyyy)) {
                                        filterList.push(peopleObj);
                                    }
                                    break;

                            }
                            break;
                        case 'edited':
                            var today = new Date();
                            var dd = today.getDate();
                            var mm = today.getMonth() + 1; //January is 0!
                            var yyyy = today.getFullYear();
                            switch (state.subFilterName) {
                                case 'Today':
                                    if (new Date(peopleObj['edited']) === today) {
                                        filterList.push(peopleObj);
                                    }
                                    break;
                                case 'Tomorrow':
                                    dd = dd + 1
                                    if (new Date(peopleObj['created']) > new Date(mm + '/' + dd + '/' + yyyy)) {
                                        filterList.push(edited);
                                    }
                                    break;
                                case 'Next Month':
                                    mm = mm + 1;
                                    if (new Date(peopleObj['edited']) > new Date(mm + '/' + dd + '/' + yyyy)) {
                                        filterList.push(peopleObj);
                                    }
                                    break;
                                case 'Yestarday':
                                    dd = dd - 1;
                                    if (new Date(peopleObj['edited']) < new Date(mm + '/' + dd + '/' + yyyy)) {
                                        filterList.push(peopleObj);
                                    }
                                    break;
                                case 'This Month':
                                    if (new Date(peopleObj['edited']) === today) {
                                        filterList.push(peopleObj);
                                    }
                                    break;
                                case 'Last Month':
                                    mm = mm - 1;
                                    if (new Date(peopleObj['edited']) < new Date(mm + '/' + dd + '/' + yyyy)) {
                                        filterList.push(peopleObj);
                                    }
                                    break;
                                case 'Next year':
                                    yyyy = yyyy - 1;
                                    if (new Date(peopleObj['edited']) < new Date(mm + '/' + dd + '/' + yyyy)) {
                                        filterList.push(peopleObj);
                                    }
                                    break;

                            }
                            break;
                    }
                })

            }

            return { peopleDetails: action.obj, filmList: state.filmList, filterOptions: state.filterOptions, subFilterOptions: state.subFilterOptions, filterName: state.filterName, subFilterName: state.subFilterName, filterList: filterList };
        default:
            return state;
    }
}
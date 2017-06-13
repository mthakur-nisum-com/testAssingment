import $ from 'jquery';
import constants from '../constants/constants.js';
export default (state={}, action) => {
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
            return {filmList:filmList};
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
            state.characterList=characterObjList;
            return {characterList:characterObjList,filmList:state.filmList};
        default:
            return state;
    }
}

 export default {
     getFileCharacterDetails: function(argument) {
         return {
             requestType: argument.requestType,
             requesturl: argument.requesturl,
             data: argument.data,
             type: argument.actionType,
             successCallBack: argument.success
         }
     },
     getFilmList :function(argument){
     	return {
             requestType: argument.requestType,
             requesturl: argument.requesturl,
             data: argument.data,
             type: argument.actionType,
             successCallBack: argument.success
            
         }
     },
     handleClick: function(argument) {
         return {

         }
     }
 }

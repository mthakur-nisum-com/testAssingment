 export default {
     getPeopleCharacterDetails: function(argument) {
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
     getPeopleDetails:function(argument){
        return{
            requestType:argument.requestType,
            url:argument.url,
            type:'planet_details'
        }
     },
     hideDialog :function(argument){
        return{
            obj:null,
            type:'hide_dialog'
        }
     },
     filterData: function(argument) {
         return {
            type:'filter_data',
            filterType:argument
         }
     },
     subFilterData:function(argument){
        return {
            type:'handle_subfilter',
            filterType:argument
         }
     },
     getData:function(argument){
        return{
            type:'get_data',
            data:argument
        }
     }
 }

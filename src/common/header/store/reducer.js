import * as constants from './constants';
import { fromJS } from 'immutable';
//immutable对象 不可改变的对象

const defaultState =fromJS({

			focused:false,
			list:[],
			page: 1,
			totalPage: 1,
			mouseIn:false
	
});
export default (state=defaultState,action) => {
	
	// if(action.type===constants.SEARCH_FOCUS){
	// 	//immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
	// 	return state.set('focused',true);
	// }
	// if(action.type===constants.SEARCH_BLUR){
	// 	return state.set('focused',false);
	// }
	// if(action.type===constants.CHANGE_LIST){
	// 	// return state.set('focused',false);
	// 	console.log('test');
	// 	return state.set('list',action.data);
	// 	// return state;
	// }
	// return state;


	switch (action.type){
		case constants.SEARCH_FOCUS:
			return state.set('focused',true);
			
		case constants.SEARCH_BLUR:
			return state.set('focused',false);
			
		case constants.CHANGE_LIST:
			// return state.set('list',action.data)
			// 	.set('totalPage',action.totalPage)
			// ;
			return state.merge({
				list:action.data,
				totalPage:action.totalPage
			});
			
		case constants.MOUSE_ENTER:
			return state.set('mouseIn',true);
		
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn',false);
		case constants.CHANGE_PAGE:
			return state.set('page',action.page);
			

		default:
			return state;
			
	}






	
}
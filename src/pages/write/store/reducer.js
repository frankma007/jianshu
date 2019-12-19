import * as constants from './constants';
import { fromJS } from 'immutable';

//immutable对象 不可改变的对象

const defaultState =fromJS({

		
		title: "",
		content: ""
	
		
			
	
});
export default (state=defaultState,action) => {
	
	


	switch (action.type){	
		case constants.CHANGE_CONTENT:
			return state.merge({
				
				
				title:action.data.title,
				content:action.data.content
				
			});
			
		
		default:
			return state;
			
	}






	
}
import * as constants from './constants';
import { fromJS } from 'immutable';

//immutable对象 不可改变的对象

const defaultState =fromJS({

		login:false
	
		
			
	
});
export default (state=defaultState,action) => {
	
	


	switch (action.type){	
		case constants.CHANGE_LOGIN:
			return state.merge({
				
				
				login:action.isLogin
				
				
			});
			
		
		default:
			return state;
			
	}






	
}
import * as constants from './constants';
import { fromJS } from 'immutable';

//immutable对象 不可改变的对象

const defaultState =fromJS({

		
			topicList:[],
			articleList:[],
			recommendList: [],
			articlePage:1,
			showScroll:true

		
			
	
});
export default (state=defaultState,action) => {
	
	


	switch (action.type){
		case constants.CHANGE_HOME_DATA:
		// const newState.
			return state.merge({
				recommendList:fromJS(action.recommendList),
				articleList:fromJS(action.articleList),
				topicList:fromJS(action.topicList)
			});


		case constants.LOADMOREDATA:		
			return state.merge({
				
				articleList:state.get('articleList').concat(action.articleList),
				articlePage:action.page
				
			});
		case constants.TOGGLETOPSHOW:
			return state.merge({
				
				
				showScroll:action.data
				
			});
			
		
		default:
			return state;
			
	}






	
}
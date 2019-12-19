import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';
const changeHomeData=(result)=>{
	return {
			type :constants.CHANGE_HOME_DATA,
			articleList : result.articleList,
			topicList : result.topicList,
			recommendList : result.recommendList
	}
}
const loadMoreData=(data,page)=>{
	return {
			type :constants.LOADMOREDATA,
			articleList :fromJS(data),
			page
			
			
	}
}

export const getList=()=>{
	return(dispatch)=>{
		
		axios.get('/api/home.json')
		.then((res)=>{
			console.log(res.data.data)
			const result =res.data.data;
			const action=changeHomeData(result);
			dispatch(action);

		}).catch(()=>{
			console.log('error')
		})


	}

}
export const loadMoreList=(page)=>{
	return(dispatch)=>{
		
		axios.get('/api/homeList.json?page='+page)
		.then((res)=>{
			console.log(res.data.data)
			const result =res.data.data;
			const action=loadMoreData(result,page);
			dispatch(action);

		}).catch(()=>{
			console.log('error')
		})


	}

}

export const toggleTopShow=(data)=>{
	return {
			type :constants.TOGGLETOPSHOW,
			data		
			
	}
}

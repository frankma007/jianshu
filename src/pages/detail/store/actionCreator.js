import * as constants from './constants';
import axios from 'axios';


 const changeContent=(data)=>{
	return {
			type :constants.CHANGE_CONTENT,
			data		
			
	}
}

export const getContent=(id)=>{
	return(dispatch)=>{
		
		axios.get('/api/detail.json?id='+id)
		.then((res)=>{
			
			const result =res.data.data;
			const action=changeContent(result);
			dispatch(action);

		}).catch(()=>{
			console.log('error')
		})


	}

}




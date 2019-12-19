import * as constants from './constants';
import axios from 'axios';


export const changeLogin=(isLogin)=>{
	return {
			type :constants.CHANGE_LOGIN,
			isLogin		
			
	}
}

export const login=(account,pwd)=>{
	return(dispatch)=>{
		
		axios.get('/api/login.json?account='+account+'&password='+pwd)
		.then((res)=>{
			console.log(res,'999')
			const result =res.data.data;
			const action=changeLogin(result);
			dispatch(action);

		}).catch(()=>{
			console.log('error')
		})


	}

}




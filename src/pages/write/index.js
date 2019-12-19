import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom'

import { actionCreators } from './store'

import { LoginWrapper, LoginBox,Input , Button } from './style';



class Writer extends Component{

	render(){
		 console.log(this.props.loginStatus)
		 const {loginStatus}=this.props; 
	
		if(loginStatus){
			return(
				<div>
					写文章
				</div>
			)
		}
		else{
			return <Redirect to='/login' />
		}
				
		
			
	}


}

const mapStateToProps=(state)=>{
	return {	
		
		loginStatus:state.getIn(['login','login'])
		
		
	}
}

// const mapDispatchToProps=(dispatch)=>{
// 	return {
// 		login(accountElem,passwordElem){
// 			console.log(accountElem.value,passwordElem.value);
// 			dispatch(actionCreators.login(accountElem.value,passwordElem.value))

// 		}
		
		
// 	}
// }
export default connect(mapStateToProps,null)(Writer);
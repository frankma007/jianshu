import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom'

import { actionCreators } from './store'

import { LoginWrapper, LoginBox,Input , Button } from './style';



class Login extends Component{

	render(){
		 console.log(this.props.loginStatus)
		 const {loginStatus}=this.props; 
	
		if(!loginStatus){
			return(
				<LoginWrapper>
						<LoginBox>
							<Input 
								placeholder='账号' 
								innerRef={(input)=>{this.account = input }}  
							/>
							<Input placeholder='密码' 
								type='password' 
								innerRef={(input)=>{this.password = input}}
							
							/>
							<Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
						</LoginBox>
				</LoginWrapper>
			)
		}
		else{
			return <Redirect to='/' />
		}
				
		
			
	}


}

const mapStateToProps=(state)=>{
	return {	
		
		loginStatus:state.getIn(['login','login'])
		
		
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		login(accountElem,passwordElem){
			console.log(accountElem.value,passwordElem.value);
			dispatch(actionCreators.login(accountElem.value,passwordElem.value))

		}
		
		
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);
import React,{ Component } from 'react';

import {connect} from 'react-redux';


import { actionCreator } from './store'
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { 
	HomeWrapper ,
	HomeLeft,
	HomeRight,
	
	BackTop
} from './style';
class Home extends Component{
	render(){
		return(
			<div>
			<HomeWrapper>
				<HomeLeft>
					<img 
						className='banner-img'
						alt='' 
						src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
					 />
					 <Topic />
					 <List />

					 
					
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
				{this.props.showScroll?(<BackTop onClick={this.props.handleScrollTop}>顶部</BackTop>):null}
			</HomeWrapper >
				
			</div>
		)
	}

	componentDidMount(){
		this.props.changeHomeData();
		//监听scrollTop值
		this.bindEvents();
		
	}
	componentWillUnmount(){
		window.removeEventListener('scroll',this.props.changeScrollTopShow);
	}
	bindEvents(){
		window.addEventListener('scroll',this.props.changeScrollTopShow);
	}

}
const mapStateToProps =(state)=>{
	return {
		showScroll:state.getIn(['home','showScroll']),
	}
}
const mapDispatchToProps =(dispatch)=>{
	return {
		changeHomeData(){
			const action=actionCreator.getList();
			dispatch(action);
		},
		changeScrollTopShow(){
			// console.log(document.documentElement.scrollTop);
			if(document.documentElement.scrollTop>400){

				dispatch(actionCreator.toggleTopShow(true));
			}
			else{
				dispatch(actionCreator.toggleTopShow(false));
			}
			
		},
		handleScrollTop(){
			window.scrollTo(0,0)
		}
	}
}

 

export default connect(mapStateToProps,mapDispatchToProps)(Home);
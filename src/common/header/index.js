import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {actionCreators as loginActionCreators } from '../../pages/login/store'

import { Link } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';



import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	 Addition ,
	 Button,
	 SearchInfo,
	 SearchInfoTitle,
	 SearchInfoSwitch,
	 SearchInfoList,
	 SearchInfoItem
	}from './style';





	class Header extends Component{

				 getListArea(){
			 	const {focused,list,page,mouseIn,handleMouseEnter,handleMouseLeave,handleChangePage,totalPage}=this.props;
			 	const newList =list.toJS();
				const pageList=[];
				if(newList.length){
					for(let i=(page -1)*10;i<page*10;i++){
										// console.log(newList[i]);
										pageList.push(
											<SearchInfoItem key={newList[i]}  >{newList[i]}</SearchInfoItem>

										);

					}
				}
				

				if (focused || mouseIn) {
						return (
								<SearchInfo 
									onMouseEnter={ handleMouseEnter }
									onMouseLeave={ handleMouseLeave }
								>
										<SearchInfoTitle>热门搜索</SearchInfoTitle>
										<SearchInfoSwitch
											onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}
										>
											<i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
											换一批
										</SearchInfoSwitch>
										<SearchInfoList>
											{ pageList }										
										</SearchInfoList>

								</SearchInfo>


						);

				}else{
					return null;
				}
		}

		render(){
			const { focused , handleInputFocus , handleInputBlur,list,login,loginOut }=this.props;
				return(
					<HeaderWrapper>
						<Link to='/'>
							<Logo/>
						</Link>
						<Nav>
							<NavItem className='left active'>首页</NavItem>
							<NavItem className='left'>下载App</NavItem>
							<NavItem className='right'>
								<i className="iconfont">&#xe636;</i>
							</NavItem>
							{
								login?

								<NavItem onClick={loginOut} className='right'>退出</NavItem>
								:<Link to='/login' ><NavItem className='right'>登陆</NavItem></Link>}
							
							<SearchWrapper>
								<CSSTransition
									in={focused}
									timeout={200}
									classNames="slide"
								>
								<NavSearch 
									className={focused?'focused':''}
									onFocus={()=>handleInputFocus(list)}
									onBlur={handleInputBlur}
								>
								</NavSearch>


								</CSSTransition>
							<i className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>
								
									&#xe614;
								</i>
								{this.getListArea()}
							</SearchWrapper>
						</Nav>
						<Addition>

						<Link to='/write'>
								<Button className='writting'>
									<i className="iconfont">&#xe615;</i>
									写文章
								</Button>

							 <Button className='reg'>注册</Button>
							 </Link>
						</Addition>


				
					</HeaderWrapper>

				)
		}









}




const mapStateToProps=(state)=>{
	return {
		// focused:state.get('header').get('focused')
		focused:state.getIn(['header','focused']),
		list:state.getIn(['header','list']),
		page:state.getIn(['header','page']),
		mouseIn:state.getIn(['header','mouseIn']),
		totalPage:state.getIn(['header','totalPage']),
		login:state.getIn(['login','login'])
	}
}
const mapDispatchToProps=(dispatch)=>{
	return {
					handleInputFocus(list){
						// console.log(list);
						// if(list.size ===0){								
						// 	dispatch(actionCreators.getList());
						// }
						(list.size ===0) && dispatch(actionCreators.getList());
						// (!list.size ) && dispatch(actionCreators.getList());
						dispatch(actionCreators.searchFocus());

					},
						handleInputBlur(){
						const action =actionCreators.searchBlur();
						dispatch(action);

					},
					handleMouseEnter(){
						const action =actionCreators.mouseEnter();
						dispatch(action);
					},
					handleMouseLeave(){
						const action =actionCreators.mouseLeave();
						dispatch(action);
					},
					handleChangePage(page,totalPage,spin){

						let oranginAngle =spin.style.transform.replace(/[^0-9]/ig,'');
						if(oranginAngle){
							oranginAngle=parseInt(oranginAngle,10)

						}
						else{
							oranginAngle=0;
						}
						spin.style.transform='rotate('+(oranginAngle+360)+'deg)';
						console.log(spin.style.transform);
						console.log(page,totalPage);
						let action;
						if(page<totalPage){
						 	action =actionCreators.changePage(page+1);
						}
						else{
							action =actionCreators.changePage(1);
						
						}
						
						dispatch(action);
					},
					loginOut(){
						dispatch(loginActionCreators.changeLogin(false));
					}
					

	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);
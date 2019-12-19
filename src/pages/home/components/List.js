import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreator } from'../store';

import {
	ListItem,ListInfo,LoadMore

}from '../style';
class List extends Component{
	render(){
		const {list,loadMore,page}=this.props;
		return(
			<div>
			{
				list.map((item,index)=>{
					return(
						<Link key={index} to='/detail'>
							<ListItem >

								<img
									alt='' 
									className='pic' 
									src={'https:'+item.get('imgUrl')} 
								 />
								<ListInfo>
									<h3 className='title'>{item.get('title')}</h3>
									<p className='desc'>{item.get('desc')}</p>
								</ListInfo>
							</ListItem>
						</Link>

					);
				})
			}
				<ListItem>

						<img alt='' className='pic' src='http://upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64' />
									<ListInfo>
										<h3 className='title'>wwwwww</h3>
										<p className='desc'>dadsadasdDfdsggsfgsgsfdgs地方撒水电费</p>
									</ListInfo>
				</ListItem>
				<LoadMore onClick={()=>loadMore(page)}>加载更多</LoadMore>

				


			</div>
		)
	}
}

const mapStateToProps=(state)=>{
	return {
		
		list:state.getIn(['home','articleList']),
		page:state.getIn(['home','articlePage'])
		
		
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		loadMore(page){
			const action=actionCreator.loadMoreList(page+1);
			dispatch(action);
		}
		
		
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(List);
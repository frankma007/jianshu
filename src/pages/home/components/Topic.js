import React,{ Component } from 'react';
import {connect} from 'react-redux';

import {
	TopicWrapper,
	TopicItem

}from '../style';
class Topic extends Component{
	render(){
		console.log(this.props.list)
		const {list}= this.props;
		return(
			<div>
				<TopicWrapper>
					{
						list.map((item) => {
						
							return(
								<TopicItem key={item.get('id')}>
									<img
										className='topic-pic'
										src={item.get('imgUrl')}
										alt=''
									/>
									{item.get('title')}
								</TopicItem>
							);
						
						})
					}
					
					
				</TopicWrapper>
			</div>
		)
	}
}
const mapStateToProps=(state)=>{
	return {
		
		list:state.getIn(['home','topicList']),
		
	}
}

export default connect(mapStateToProps,null)(Topic);
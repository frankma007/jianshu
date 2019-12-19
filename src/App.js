import React,{ Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter,Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import store from './store';
import Login from './pages/login';
import Write from './pages/write';

class App extends Component{
	render(){
		return (
			<Provider store={store}>

							
					
					
					<BrowserRouter>
						<div>
							<Header />
							<Route 
								exact
								path='/' 
								// render={()=><div>home</div>}
								component={Home}
							> 
							</Route>
							<Route 
								exact
								path='/detail/:id' 
								// render={()=><div>detail</div>}
								component={Detail}
							> 
							</Route>
							<Route 
								exact
								path='/login' 
								// render={()=><div>detail</div>}
								component={Login}
							>
							</Route> 
							<Route 
								exact
								path='/write' 
								
								component={Write}
							> 
							</Route>
						</div>
					</BrowserRouter>
			
				
			</Provider>
			)
			
				
	}


}


export default App;

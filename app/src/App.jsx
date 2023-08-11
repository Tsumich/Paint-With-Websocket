import React from 'react'
import './css/app.scss';
import Settingbar from './components/Settingbar';
import Toolbar from './components/Toolbar';
import Canvas from './components/Canvas';
import { BrowserRouter,Link, Routes, Route, Navigate, Router} from 'react-router-dom';


function App() {
//const redirect = useNavigate()	
// {redirect()}
let id = `f${(+new Date).toString(16)}` 
console.log(id)
  return (
	 
	  <BrowserRouter>
		  <div className="App">			  
			  <Routes>			  
			  	<Route path='/:id' element={<div> <Toolbar/> <Settingbar/> <Canvas/></div> }/>			  		
				 <Route path="/" element={<Navigate replace to={`${id}`} />} />	
		  </Routes>	 
	   	  </div>
	  </BrowserRouter>    
  );
}

export default App;

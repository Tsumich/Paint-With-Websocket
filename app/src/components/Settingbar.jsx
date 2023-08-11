import React from 'react'
import toolState from '../store/toolState';
function Settingbar() {
  return (
    <div className="settingbar">
    	<label htmlFor='line-width'> Толщина линии</label>
     		<input 
		     	onChange={e => toolState.setLineWidth(e.target.value)}
		     	type='number' 
		     	style={{margin: '0 10px'}} 
		     	id="line-width"
		     	defaultValue={1} 
		     	min={1} 
		     	max={50}/>
     	<label htmlFor='stroke-color'/>цвет обводки
     		<input 
     		onChange={e => toolState.setStrokeColor(e.target.value)} 
     		id='stroke-color' 
     		type='color'/>
    </div>
  );
}

export default Settingbar;

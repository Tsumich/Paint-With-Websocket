import React from 'react'
import '../css/toolbar.scss'
import toolState from '../store/toolState';
import Brush from '../tools/Brush';
import Erase from '../tools/Erase';
import canvasState from '../store/canvasState';
import Rect from '../tools/Rect';
function Toolbar() {
	
	const changeColor = e => {
		console.log(e)
		toolState.setStrokeColor(e.target.value)
		toolState.setFillColor(e.target.value)
		
	}	
	
	const download = () => {
		const dataUrl = canvasState.canvas.toDataURL()
		const a = document.createElement('a')
		a.href = dataUrl
		a.dowload = canvasState.sessionid + 'jpg'
		document.body.appendChild(a)
		a.click()
		document.body.removeChild(a)
	}
  return (
    <div className="toolbar">
     	<button className='toolbar__btn brush' onClick={() => toolState.setTool(new Brush(canvasState.canvas, canvasState.socket, canvasState.sessionid))}/>
     	<button className='toolbar__btn rect'  onClick={() => toolState.setTool(new Rect(canvasState.canvas, canvasState.socket, canvasState.sessionid))}/>
     	<input onChange={e => changeColor(e)} style={{marginLeft:10, marginTop:5}} type="color"/>
     	<button className='toolbar__btn erase' onClick={() => toolState.setTool(new Erase(canvasState.canvas))}/>
     	
     	<button className='toolbar__btn undo' onClick={() => canvasState.undo()}/>
     	<button className='toolbar__btn redo' onClick={() => canvasState.redo()}/>
     	<button className='toolbar__btn save' onClick={() => download()}/>
    </div>
  );
}

export default Toolbar;

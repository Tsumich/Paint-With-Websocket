import {makeAutoObservable} from 'mobx'

class ToolState{
	tool = null
	constructor(){
		makeAutoObservable(this)
	}
	
	setTool(tool){ //action-функция , так называют функции которые изменяю состояние
		this.tool = tool
		// мы выбираем инструмент и он сохраняется в глобальное хранилище
	}
	
	setFillColor(color){ //action-функция , так называют функции которые изменяю состояние
		console.log(11212121212)
		this.tool.fillColor = color
	}
	setStrokeColor(color){ //action-функция , так называют функции которые изменяю состояние
		this.tool.strokeColor = color
	}
	setLineWidth(width){ //action-функция , так называют функции которые изменяю состояние
		this.tool.lineWidth = width
	}
}
export default new ToolState()
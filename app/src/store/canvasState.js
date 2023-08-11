import {makeAutoObservable} from 'mobx'

class CanvasState{
	canvas = null
	socket = null
	sessionid = null
	undoList = []
	redoList = []
	userName = ''
	constructor(){
		makeAutoObservable(this)
	}
	
	setSessionId(id){
		this.sessionid = id
	}
	
	setSocket(socket){
		this.socket = socket
	}
	
	setUsername(username){
		this.username = username
	}
	
	setCanvas(canvas){ //action-функция , так называют функции которые изменяю состояние
		this.canvas = canvas //храним ссыку на канвас
		 //хранить его нужно чтобы мы могли обращаться к нему из разных компонентов
	}
	pushToUndo(data){
		this.undoList.push(data)
	}
	pushRedo(data){
		this.redoList.push(data)
	}
	
	undo(){
		console.log(this.undoList.length, 'undolist')
		let ctx = this.canvas.getContext('2d')
		if(this.undoList.length > 0){
			let dataURL = this.undoList.pop()//достали последний рисунок
			this.redoList.push(this.canvas.toDataURL())
			let img = new Image()
			img.src = dataURL;
			img.onload = () => {
				ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
				ctx.drawImage(img, 0,0,this.canvas.width, this.canvas.height)//отрисовали этот рисунок
			}
		}else{
			ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
		}
	}
	redo(){
		console.log(this.redoList.length, 'redolist')
		let ctx = this.canvas.getContext('2d')
		if(this.redoList.length > 0){
			let dataURL = this.redoList.pop()//достали последний рисунок
			this.undoList.push(this.canvas.toDataURL())
			let img = new Image()
			img.src = dataURL;
			img.onload = () => {
				ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
				ctx.drawImage(img, 0,0,this.canvas.width, this.canvas.height)//отрисовали этот рисунок
			}
		}//else{
		//	ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
		//}
	}
	
}
export default new CanvasState()
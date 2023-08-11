import Tool from "./Tool";

export default class Erase extends Tool {
	constructor(canvas){
		super(canvas)
		// после создания объекта канвас вызывается фунция со слушателями
		this.listen()
	}
	
	listen(){
		this.canvas.onmouseup = this.mouseUpHandler.bind(this)
		this.canvas.onmousedown = this.mouseDownHandler.bind(this)
		this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
	}
	
	mouseUpHandler(e){
		this.mouseDown = false
	}
	mouseDownHandler(e){
		this.mouseDown = true
		this.ctx.beginPath()
		//console.log(e.pageX , e.target.offsetLeft, e.pageY , e.target.offsetTop)
		//console.log(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
		this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)// точка от котроый будем рисовать
	}
	mouseMoveHandler(e){
		if(this.mouseDown){
			
			this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
		}
	 
	}
	draw(x,y){
		this.ctx.fillStyle = "#FFFFFF ";
		this.ctx.strokeStyle ="#FFFFFF ";
		this.ctx.lineTo(x,y)
		this.ctx.stroke()//обводка линии
		//console.log('draw', x,y)
	}
	
}

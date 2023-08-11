const btn = document.getElementById('btn')
console.log(btn)
const socket = new WebSocket('ws://localhost:5000/')

socket.onopen = () => {
	socket.send(JSON.stringify({
		id:555,
		method: 'connection',
		username: 'diana'
	}))
}
socket.onmessage = (event) => {
	console.log('С сервера пришло сообщение', event.data)
}
btn.onclick = () => {
	socket.send(JSON.stringify({
		method: 'connection',
		message: 'привет',
		username:'diana',
		id: 555
	}))
}
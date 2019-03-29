$(function () {
var socket = io.connect('http://localhost:3000')
socket.on("hi",()=>{
    console.log("eventReceieved")
})
console.log("hi")
})
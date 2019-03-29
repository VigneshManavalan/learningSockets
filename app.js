const express = require('express');
const app = express();
app.set('view engine','ejs');
app.use(express.static('public'))
app.get('/',function(req,res){
    res.render('homePage.ejs');
})
const server = app.listen(3000)
const io = require('socket.io')(server)
io.on("connection",(socket)=>{
    io.sockets.emit("hi");
    console.log("a user logged")
})

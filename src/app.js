const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const http = require('http');
const socketio = require('socket.io')

const app = express();
const server = http.createServer(app)
const io = socketio(server)

const publicDirectory = path.join(__dirname, '../public');
app.use(express.static(publicDirectory))

io.on('connection', (socket) => {
    console.log('New WebSocket Connection')
    socket.emit('message', "Welcome")
    socket.broadcast.emit('message', "A new user has joined")

    socket.on('message', (message) => {
        io.emit('message', message)
    })
})

app.get("/home", (req, res) => {
    
    res.send("loaded.")
    console.log(req.query)
});

server.listen(3000, () => {
    console.log("running...")
})
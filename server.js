const path = require('path');
const express = require('express');


const app = express();

const { Server } = require('socket.io');
const { createServer} = require('http');

const cors = require('cors');
const bodyParser = require('body-parser');


// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// Server
const server = createServer(app);

// Sockets
// declaring server side socket
/**
 * use io.emit('') to send the events to all the connections including emitter.
 * Socket.to('room').emit('') will send the events to particular connected sockets in room - apart from emitter.
 * socket.broadcase.emit('') send events to all public apart from emitter
 */
const io = new Server(server, {
    cors: {
        origin: '*' // TODO: Should use only allowed clients here
    }
});


// On Connect event listener for sockets
io.on('connection', (socket) => {
    
    socket.emit('add_rooms_to_list', rooms);

    socket.emit('on_connection', "You have been connected to socket!");

    console.log('socket_id', socket.id);

    socket.on('create', function(room) {
        rooms.push(room);
        socket.join(room);
        socket.broadcast.emit('room_created', room);
    })

    socket.on('new_message_from_client', ({ msg, room }) => {
        console.log('new msg from client', msg, room);
        socket.to(room).emit('new_message_from_server', {msg, room});
    })

    socket.on('join_room', (room) => {
        socket.join(room);
    })
});

// server.listen
server.listen(8000);


// On Listen server
server.on('listening', () => {
    console.log('Listening!',);
});
const socket = require('socket.io');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;
app.use(cors());

const server = app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});

// to initialize the socket, we need to invoke a new instance
//     of socket.io and pass it our express server instance
// We must also include a configuration settings object to prevent CORS errors
const io = socket(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});

io.on("connection", socket => {
    console.log('socket id: ' + socket.id);
    socket.emit("new_user", "Welcome to this server!");

    socket.on("new_message_from_client", data => socket.broadcast.emit("new_message_from_server", data ) );
});
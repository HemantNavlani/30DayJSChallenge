const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 4000 });

wss.on('connection', (ws) => {
  console.log('New client connected');

  // Send a welcome message to the new client
  ws.send(JSON.stringify({ sender: 'Server', message: 'Welcome to the chat!' }));

  // Handle incoming messages from clients
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
        console.log("Message broadcasted to client");
      }
    });
  });

  // Send a periodic message from the server
  const intervalId = setInterval(() => {
    const serverMessage = JSON.stringify({ sender: 'Server', message: 'This is a periodic server message.' });
    ws.send(serverMessage);
  }, 30000); // Every 30 seconds

  // Handle client disconnection
  ws.on('close', () => {
    console.log('Client disconnected');
    clearInterval(intervalId); // Clear the interval when the client disconnects
  });
});

console.log('WebSocket server is running on ws://localhost:4000');

const loginContainer = document.getElementById('loginContainer');
const chatContainer = document.getElementById('chatContainer');
const messagesDiv = document.getElementById('messages');
const usernameInput = document.getElementById('usernameInput');
const messageInput = document.getElementById('messageInput');
const joinButton = document.getElementById('joinButton');
const sendButton = document.getElementById('sendButton');
let ws;
let username = '';

// Function to display messages in the chat window
function displayMessage(sender, message, messageType = 'other') {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${messageType}`;
    messageElement.textContent = `${sender}: ${message}`;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll to the bottom
}

// Function to handle incoming messages
function handleIncomingMessage(event) {
    const data = JSON.parse(event.data);
    console.log(`Received message from ${data.sender}: ${data.message}`);
    const messageType = data.sender === username ? 'you' : 'other';
    displayMessage(data.sender, data.message, messageType);
}

// Function to handle sending messages
function sendMessage() {
    const message = messageInput.value;
    if (message.trim() !== '') {
        const data = { sender: username, message: message };
        ws.send(JSON.stringify(data));
        displayMessage('You', message, 'you');
        messageInput.value = '';
    }
}

// Event listener for the join button
joinButton.addEventListener('click', () => {
    username = usernameInput.value.trim();
    if (username) {
        ws = new WebSocket('ws://localhost:4000');
        ws.onopen = () => {
        console.log('Connected to the WebSocket server');
        displayMessage('System', 'Connected to the WebSocket server', 'system');
    };
    ws.onmessage = handleIncomingMessage;
    ws.onclose = () => {
        console.log('Disconnected from the WebSocket server');
        displayMessage('System', 'Disconnected from the WebSocket server', 'system');
    };
    ws.onerror = (error) => {
        console.error(`WebSocket error: ${error}`);
        displayMessage('System', `WebSocket error: ${error}`, 'system');
    };

    loginContainer.style.display = 'none';
    chatContainer.style.display = 'flex';
}
});

// Event listener for the send button
sendButton.addEventListener('click', sendMessage);

// Event listener for the Enter key to send messages
messageInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

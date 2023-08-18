const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
	console.log(message.body);
});

client.on('message', message => {
	if(message.body === '!ping') {
		client.sendMessage(message.from, 'pong');
	}
});
 

client.on('message', message => {
	if(message.body === '!ping') {
		client.sendMessage(message.from, 'pong');
	}
});
 

 
 

client.initialize();
 



app.use(cors());
app.use(bodyParser.json());

// Example Markdown content


const markdownContent = `
# Welcome to My Markdown API

This is **dynamic** Markdown content fetched from the backend!

- List item 1
- List item 2
- List item 3
`;

app.get('/api/markdown', (req, res) => {
  res.json({ markdown: markdownContent });
});

const PORT = 3001; // You can change this port if needed
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

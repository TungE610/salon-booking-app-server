const express = require('express');
const app = express();
const client = require('twilio')('AC0c584cb20b76918a58e02801640db088', '19454ea22c857ad1c518c21d5d05770a');

const port = 3000;

app.get('/', (req, res) => {
	sendTextMessage();
	res.send(`
		<div style="padding-top: 40px">
			<h1>successful sending</h1>
		</div>
	`)
})

app.listen(port, () => {
	console.log('listening in 3000');
})

const sendTextMessage = () => {
	client.messages
	.create({
	  body: 'Hello from twilio-node',
	  to: '+84393859464', // Text your number
	  from: '+12524945023', // From a valid Twilio number
	})
	.then((message) => console.log(message));
}
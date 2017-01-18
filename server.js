const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const path = require('path');
const app = express();

const contacts = require('./server/data')();

app.use(express.static(__dirname + '/public'));
app.use(cors());

app.get('/api/contacts', function(req, res) {
	res.json(contacts);
});

app.listen(process.env.PORT || 4000, function() {
	console.log(chalk.green('Node is Running on port ' + process.env.PORT));
});

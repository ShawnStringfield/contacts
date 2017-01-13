const express = require('express');
const cors = require('cors');
const faker = require('faker');
const chalk = require('chalk');
const _ = require('lodash');
const app = express();

const contactsApi = () => {
	return {
		contacts: _.times(96, function() {
			return {
				uid: faker.random.uuid(),
				avatar: faker.internet.avatar(),
				email: faker.internet.email(),
				phone: faker.phone.phoneNumberFormat(),
				name: {
					first: faker.name.firstName(),
					last: faker.name.lastName()
				},
				address: {
					street: faker.address.streetAddress(),
					state: faker.address.state(),
					zip: faker.address.zipCode()
				},
				company: {
					name: faker.company.companyName(),
					website: faker.internet.domainName(),
					address: {
						street: faker.address.streetAddress(),
						state: faker.address.state(),
						zip: faker.address.zipCode()
					}
				}
			}
		})
	}
}

const contacts = contactsApi();

app.use(cors());

app.get('/', function(req, res) {
	res.send('Hello World! Baby');
});

app.get('/contacts', function(req, res) {
	res.json(contacts);
});

app.listen(4000, function() {
	console.log(chalk.green('Node is Running!'));
});

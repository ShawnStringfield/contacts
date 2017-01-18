const _ = require('lodash');
const faker = require('faker');

const instagram = [
	'everydaycarry',
	'kershawknives',
	'yeseniaperezcruz',
	'benchmadeknifecompany',
	''
];

const contactsApi = () => {
	return {
		contacts: _.times(20, function() {
			return {
				uid: faker.random.uuid(),
				avatar: faker.internet.avatar(),
				email: faker.internet.email(),
				phone: faker.phone.phoneNumberFormat(),
				job_title: faker.name.jobTitle(),
				social: {
					instagram: _.sample(instagram)
				},
				name: {
					first: faker.name.firstName(),
					last: faker.name.lastName(),
				},
				address: {
					street: faker.address.streetAddress(),
					city: faker.address.city(),
					state: faker.address.state(),
					zip: faker.address.zipCode(),
					lat: faker.address.latitude(),
					long: faker.address.longitude()
				},
				company: {
					name: faker.company.companyName(),
					website: faker.internet.domainName(),
					phone: faker.phone.phoneNumberFormat(),
					email: faker.internet.email(),
					address: {
						street: faker.address.streetAddress(),
						city: faker.address.city(),
						state: faker.address.state(),
						zip: faker.address.zipCode()
					}
				},
				notes: _.times(3, function() {
					return {
						text: faker.lorem.paragraph(),
						time: faker.date.recent()
					}
				})
			}
		})
	}
}

module.exports = contactsApi;

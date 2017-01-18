import axios from 'axios';

const contacts_url = `/api/contacts`;
const getAllContacts = function() {
	return axios.get(contacts_url).then(response => response.data.contacts);
};

const resource = {
	getAllContacts
};

export default resource;

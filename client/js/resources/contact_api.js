import axios from 'axios';
// import config from '../../constants';

const contacts_url = `/contacts`;
const getAllContacts = function() {
	return axios.get(contacts_url).then(response => response.data.contacts);
};

const resource = {
	getAllContacts
};

export default resource;

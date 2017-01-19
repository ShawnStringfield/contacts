const get = function(k) {
	return JSON.parse(localStorage.getItem(k));
}

const set = function(k, v) {
	localStorage.setItem(k, JSON.stringify(v));
}

export default {get, set};

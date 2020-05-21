import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://sb-vue-axios.firebaseio.com',
});

instance.defaults.headers.common['Something'] = 'SomethingElse'

export default instance